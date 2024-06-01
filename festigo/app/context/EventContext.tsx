"use client";
import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";

// Create Event Context
const EventContext = createContext(null);

// Event Provider Component
export const EventProvider = ({ children }: { children: React.ReactNode }) => {
  const { user }: any = useAuth();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState(null);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      let response;

      if (user.role === "eventOrganizer") {
        // Fetch events for event organizer
        response = await axios.get(
          `/api/event/allevents?username=${user.username}`
        );

        // Filter on the starting date of events
        const sortedEvents = response.data.data.sort(
          (a: any, b: any) =>
            new Date(b.startDateTime).getTime() -
            new Date(a.startDateTime).getTime()
        );
        setEvent(sortedEvents[0]);
      } else {
        // Fetch events for vendors
        response = await axios.post(`/api/vendors/allEvents`, {
          username: user.username,
        });

        // Extract events from the response and sort them
        const vendorEvents = response.data.data.flatMap(
          (item: any) => item.event
        );

        const sortedVendorEvents = vendorEvents.sort(
          (a: any, b: any) =>
            new Date(b.startDateTime).getTime() -
            new Date(a.startDateTime).getTime()
        );

        setEvent(sortedVendorEvents[0]);
      }
    } catch (error) {
      console.log(
        "Something went wrong when trying to fetch all events",
        error
      );
      setEvent(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchEvents();
    }
  }, [user]);

  return (
    <EventContext.Provider value={{ event, setEvent, loading }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook to use Event Context
export const useEvent = () => {
  return useContext(EventContext);
};
