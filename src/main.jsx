import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClientProvider, QueryClient } from "react-query";

//components
import "./components/HeaderNav/header.css";
import "./components/Carousel/Carousel.css";
import "./components/ProductByCategory/productbycategory.css";

//pages css
import "./index.css";
import "./pages/Home/home.css";
import "./pages/About/about.css";
import "./pages/Contact/contact.css";
import "./components/Categories/categories.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
