// Core-modules and third-party modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Config
dotenv.config();

// Database Setup
import { Client } from "pg";

// App Instances and Middleware
const app = express();
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.static("public"));

const client = new Client({
  connectionString: process.env.PGURI,
});

client
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.post("/api/bookings", async (request, response) => {
  const { event_id, full_name, email, phone, notes } = request.body;

  try {
    if (!full_name || !email) {
      return response.status(400).json({
        error: "Full name and email are required",
      });
    }

    await client.query(
      "INSERT INTO bookings (event_id, full_name, email, phone, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [event_id, full_name, email, phone, notes]
    );

    //TODO: Uppdatera spots_left i Sanity

    response.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    console.error("Error creating booking:", error);
    response.status(500).json({
      error: "Failed to create booking",
    });
  }
});

app.post("/api/waitlist", async (request, response) => {
  const { event_id, full_name, email } = request.body;

  try {
    if (!full_name || !email) {
      return response.status(400).json({
        error: "Full name and email are required",
      });
    }

    await client.query(
      "INSERT INTO waitlist (event_id, full_name, email) VALUES ($1, $2, $3) RETURNING *",
      [event_id, full_name, email]
    );

    response
      .status(201)
      .json({ message: "Waitlist entry created successfully" });
  } catch (error) {
    console.error("Error creating waitlist entry:", error);
    response.status(500).json({
      error: "Failed to join waitlist",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
