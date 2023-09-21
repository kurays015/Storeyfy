import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//components
import "./components/HeaderNav/header.css";
import "./components/Carousel/Carousel.css";

//pages
import "./pages/Home/home.css";
import "./pages/About/about.css";
import "./pages/Contact/contact.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
