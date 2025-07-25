import React from "react";
import schoolLogo from "../images/logo/load.png"; // Update with your logo path

export default function SplashScreen() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <img src={schoolLogo} alt="Loading Logo" style={{ width: 300 }} />
    </div>
  );
}
