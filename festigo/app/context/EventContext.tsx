"use client";
import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";

// Create Auth Context
const EventContext = createContext(null);

// Auth Provider Component
export const EventProvider = ({ children }: { children: React.ReactNode }) => {
  const { user }: any = useAuth();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState(null);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      // fetch events from db
      let response;

      if (user.role === "eventOrganizer") {
        response = await axios.get(
          `/api/event/allevents?username=${user.username}`
        );
      } else {
        response = await axios.get(
          `/api/event/allevents?username=${user.username}`
        );
      }

      //   filter on the starting date of events
      const sortedEvents = response.data.data.sort(
        (a: any, b: any) =>
          new Date(b.startDateTime) - new Date(a.startDateTime)
      );

      setEvent(sortedEvents[0]);
    } catch (error) {
      console.log("Something went wrong when try to fetch all events");
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

// Custom hook to use Auth Context
export const useEvent = () => {
  return useContext(EventContext);
};
