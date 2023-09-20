import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./components/Categories/categories.css";
import "./components/HeaderNav/header.css";
import "./components/Home/home.css";
import "./components/About/about.css";
import "./components/Contact/contact.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
