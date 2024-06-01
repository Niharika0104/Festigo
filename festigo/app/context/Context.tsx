import { AuthProvider } from "./AuthContext";
import { EventProvider } from "./EventContext";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <EventProvider>{children}</EventProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
