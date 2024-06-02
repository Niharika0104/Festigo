"use client";
import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import { cookies } from 'next/headers'
 

  const cookieStore = cookies()
  const theme = cookieStore.get('token')
 

// Create Auth Context
const AuthContext = createContext(null);

// Auth Provider Component
export const AuthProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUserDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/auth/token");
      setUser(response.data.user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/auth/logout");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
