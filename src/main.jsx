import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx"; // Import your Router component
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
