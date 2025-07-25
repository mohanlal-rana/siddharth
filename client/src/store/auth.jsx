import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();
  const authorizationToken = `Bearer ${token}`;
  const [isLoadding, setIsLoadding] = useState(true);
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  
const API=`${import.meta.env.VITE_API}/api/auth/login`
console.log(API)
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };
  const LogoutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  let isLogedIn = !!token;

  const userAuthentication = async () => {
    try {
      setIsLoadding(true);
      const response = await fetch(`${API}api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const res_data = await response.json();
      if (response.ok) {
        setUser(res_data.user);
        setIsLoadding(false);
      } else {
        setIsLoadding(false);
      }
    } catch (error) {}
  };
  const fetchNotices = async function () {
    try {
      const res = await fetch(`${API}api/notice`, {
        method: "GET",
      });
      const data = await res.json();
      // console.log(data);

      if (res.ok) {
        setNotices(data);
      } else {
        console.log("failed to get notice");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API}api/event`, {
        method: "GET",
      });
      const res_data = await response.json();
      if (response.ok) {
        setEvents(res_data);
      }
      console.log(res_data)
    } catch (error) {
      console.error(error);
    }
  };
  const refreshEvents=()=>{
    fetchEvents()
  }
  const refreshNotices = () => {
    
    fetchNotices();
  };
  useEffect(() => {
    userAuthentication();
    fetchNotices();
    fetchEvents()
  }, [token]);
  return (
    <AuthContext.Provider
      value={{
        isLogedIn,
        authorizationToken,
        storeTokenInLS,
        LogoutUser,
        user,
        isLoadding,
        notices,
        events,
        refreshNotices,
        refreshEvents,
        API
      }}
    >
      {" "}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return AuthContextValue;
};
