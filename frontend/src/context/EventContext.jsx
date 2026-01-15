import React, { createContext, useState, useEffect } from "react";
import { getEvents } from "../services/sanity";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

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

      console.log("Filtering with:", { searchTerm, category });
      return (matchesTitle || matchesLocation) && matchesCategory;
    });
    setFilteredEvents(filtered);
  };

  useEffect(() => {
    async function fetchEvents() {
      const data = await getEvents();
      setEvents(data);
      setFilteredEvents(data);
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
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
