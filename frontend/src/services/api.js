const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080/api";

/**
 * Creates a new event booking
 * @param {Object} bookingData - The booking information
 * @returns {Promise} Success message from server
 */
export async function createBooking(bookingData) {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to create booking");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

/**
 * Adds user to event waitlist
 * @param {Object} bookingData - The waitlist information
 * @returns {Promise} Success message from server
 */
export async function createWaitlistEntry(bookingData) {
  try {
    const response = await fetch(`${API_BASE_URL}/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to join waitlist");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

export async function getEventAvailableSpots(eventId) {
  const response = await fetch(
    `${API_BASE_URL}/events/${eventId}/available-spots`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch available spots");
  }

  return await response.json();
}
