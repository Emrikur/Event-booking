import { createContext, useState, useEffect } from "react";
import { getEvents } from "../services/sanity";
import { getEventAvailableSpots } from "../services/api";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filterEvents = (searchTerm, category) => {
    if (!searchTerm && !category) {
      setFilteredEvents(events);
      return;
    }

    const filtered = events.filter((item) => {
      const matchesSearch = searchTerm
        ? item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.location.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const matchesCategory = category
        ? item.category.title.toLowerCase() === category.toLowerCase()
        : true;

      return matchesSearch && matchesCategory;
    });

    setFilteredEvents(filtered);
  };

  const resetFilters = () => {
    setFilteredEvents(events);
  };

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);

      try {
        const data = await getEvents();
        const now = new Date();

        const upcomingEvents = data.filter(
          (event) => new Date(event.eventDateTime) > now
        );

        const eventsWithSpots = await Promise.all(
          upcomingEvents.map(async (event) => {
            try {
              const { spotsLeft } = await getEventAvailableSpots(event._id);
              return { ...event, spotsLeft };
            } catch (error) {
              console.error(
                `Error fetching spots for event ${event._id}:`,
                error
              );
              return { ...event, spotsLeft: 0 };
            }
          })
        );

        setEvents(eventsWithSpots);
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
        filteredEvents,
        filterEvents,
        resetFilters,
        isLoading,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
