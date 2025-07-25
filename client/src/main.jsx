import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import { AuthProvider } from "./store/auth.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
  <StrictMode>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
      bodyClassName="toastBody"
    />
  </StrictMode>
  </AuthProvider>

);
