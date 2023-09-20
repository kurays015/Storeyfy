import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navigation from "./components/HeaderNav/Navigation";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Categories from "./components/Categories/Categories";
import Home from "./components/Home/Home";

function App() {
  const [productData, setProductData] = useState([]);
  // /https://dummyjson.com/products

  const getData = async () => {
    try {
      const data = await axios
        .get("https://dummyjson.com/products?limit=100")
        .then(({ data }) => data.products)
        .catch(error => console.log(error));
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home productData={productData} />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
