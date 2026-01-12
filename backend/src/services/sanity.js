import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  apiVersion: "2026-01-12",
  token: process.env.SANITY_API_TOKEN,
});

export async function createEvent(eventData) {
  console.log("EventData:", eventData);
  console.log("Date type:", typeof eventData.eventDateTime);

  if (
    !eventData.title ||
    !eventData.eventDateTime ||
    !eventData.location ||
    !eventData.hostName
  ) {
    throw new Error("Missing required fields");
  }

  if (eventData.price && eventData.price < 0) {
    throw new Error("Price must be positive");
  }

  try {
    const result = await client.create({
      _type: "event",
      ...eventData,
    });
    return result;
  } catch (error) {
    console.error("Error creating event in Sanity:", error);
    throw error;
  }
}
