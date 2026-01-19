import React, { createContext, useState, useEffect } from "react";
import { getEvents } from "../services/sanity";
import { set } from "rsuite/esm/internals/utils/date";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filterEvents = (searchTerm, category) => {
    const filtered = events.filter((item) => {
      const matchesTitle = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesLocation = item.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        !category ||
        item.category.title.toLowerCase() === category.toLowerCase();
      return (matchesTitle || matchesLocation) && matchesCategory;
    });
    setFilteredEvents(filtered);
  };

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);

      try {
        const data = await getEvents();
        const now = new Date();
        console.log("Current date:", now);
        const filteredData = data.filter(
          (event) => new Date(event.eventDateTime) > now
        );
        setEvents(filteredData);
        setFilteredEvents(filteredData);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        filteredEvents,
        setFilteredEvents,
        filterEvents,
        isLoading,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
