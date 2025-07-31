import React from "react";
import "./App.css";

export default function Loader() {
  return (
    <div className="dots-container" style={{ minHeight: "100vh", background: "#000" }}>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}