import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navigation from "./components/HeaderNav/Navigation";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Products from "./components/EachProduct/Products";

function App() {
  const [productData, setProductData] = useState([]);

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

  //main category (modified)
  const newCategory = [];
  //remove duplicate
  const categories = [...new Set(productData.map(product => product.category))];

  for (let i = 0; i < categories.length; i++) {
    const str = categories[i];
    const removeDash = str.replace("-", " ");
    const modifiedString =
      removeDash.charAt(0).toUpperCase() + removeDash.slice(1);
    const capitalFirstLetter = modifiedString
      .split(" ") // Split the string into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(" "); // Join the words back into a string
    newCategory.push(capitalFirstLetter);
  }

  const productIdRoute = newCategory.sort().map((category, index) => (
    <React.Fragment key={index}>
      <Route path={`/${category}`} element={<h1>Category!!</h1>} />
      <Route
        path={`/${category}/:id`}
        element={<Products categories={categories} />}
      />
    </React.Fragment>
  ));

  // console.log(productData);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home newCategory={newCategory} />} />
        {productIdRoute}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
