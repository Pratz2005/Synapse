import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css"; // TailwindCSS global styles

// Create the root DOM node where React will mount
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
