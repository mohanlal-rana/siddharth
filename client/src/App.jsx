import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Academics from "./pages/Academics";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Application from "./components/Application";
import Login from "./pages/Login";
import Notice from "./pages/Notice";
import Event from "./pages/Event";
import Logout from "./pages/Logout";
import AdminLayout from "./components/layouts/AdminLayout";
import AdminContact from "./pages/AdminContact";
import AdminProfile from "./pages/AdminProfile";
import AdminEvent from "./pages/AdminEvent";
import AdminNotice from "./pages/AdminNotice";
import SplashScreen from "./components/SplashScreen";
import ScrollToTop from "./components/ScrollTop";
// import SplashScreen from "./components/SplashScreen";

function AppWrapper() {
  const location = useLocation();
  const hideFooterAndApplication = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideFooterAndApplication && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/events" element={<Event />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="contacts" element={<AdminContact />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="events" element={<AdminEvent />} />
          <Route path="notice" element={<AdminNotice />} />
        </Route>
      </Routes>
      {!hideFooterAndApplication && <Application />}
      {!hideFooterAndApplication && <Footer />}
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // show splash for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <BrowserRouter>
      <ScrollToTop/>
        <AppWrapper />
      
    </BrowserRouter>
  );
}
