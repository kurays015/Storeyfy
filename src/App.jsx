import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { allCategories } from "./FetchProductsDetails";

//components
import Layout from "./components/Layout/Layout";
import ProductByCategory from "./components/ProductByCategory/ProductByCategory";
import CategoryLayout from "./components/Layout/CategoryLayout";
//pages
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Products from "./components/EachProduct/EachProduct";
import Signup from "./pages/Signup/Signup";

function App() {
  const { data, isLoading, isError } = allCategories();
  if (isLoading) return <h1>Loading...!</h1>;
  if (isError) return <h1>ERROR!</h1>;

  function NotFound() {
    return <h1>Not Found</h1>;
  }

  const productCategoryRoute = data?.map((category, index) => (
    <React.Fragment key={index}>
      <Route
        path="category"
        element={
          <CategoryLayout category={category} originalCategories={data} />
        }
      >
        <Route
          path={`${category}`}
          element={<ProductByCategory category={category} />}
        />
        <Route path={`${category}/:id`} element={<Products />} />
      </Route>
    </React.Fragment>
  ));

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {productCategoryRoute}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
