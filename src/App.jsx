import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { allCategories } from "./FetchProductsDetails";

//context
import { CartProvider } from "./Context/CartContext";

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
import AllProducts from "./components/AllProducts/AllProducts";

function App() {
  const { data, isLoading, isError } = allCategories();
  const newCopyOfCategories = data ? [...data, "all-products"] : [];

  // if (isLoading) return <h1>Loading...!</h1>;
  // if (isError) return <h1>ERROR!</h1>;

  const productCategoryRoute = newCopyOfCategories?.map((category, index) => (
    <React.Fragment key={index}>
      <Route
        path="category"
        element={
          <CategoryLayout
            category={category}
            originalCategories={newCopyOfCategories}
          />
        }
      >
        <Route
          path={`${category}`}
          element={<ProductByCategory category={category} />}
        />
        <Route
          path="all-products"
          element={<AllProducts category={category} />}
        />
        <Route path={`${category}/:id`} element={<Products />} />
      </Route>
    </React.Fragment>
  ));

  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            {productCategoryRoute}
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
