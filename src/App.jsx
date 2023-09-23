import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { allCategories } from "./FetchProductsDetails";

//components
import Navigation from "./components/HeaderNav/Navigation";
import ProductByCategory from "./components/ProductByCategory/ProductByCategory";
//pages
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Products from "./components/EachProduct/Products";

function App() {
  const { data, isLoading, isError } = allCategories();
  if (isLoading) return <h1>Loading...!</h1>;
  if (isError) return <h1>ERROR!</h1>;

  const productIdRoute = data?.map((category, index) => (
    <React.Fragment key={index}>
      <Route
        path={`/${category}`}
        element={<ProductByCategory category={category} />}
      />
      <Route path={`/${category}/:id`} element={<Products />} />
    </React.Fragment>
  ));

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home categories={data} />} />
        {productIdRoute}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
