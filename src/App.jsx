import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Layout from "./components/Layout/Layout";
import ProductByCategory from "./components/ProductByCategory/ProductByCategory";
import CategoryLayout from "./components/Layout/CategoryLayout";
//pages
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import EachProducts from "./components/EachProduct/EachProduct";
import Signup from "./pages/Signup/Signup";
import AllProducts from "./pages/AllProducts/AllProducts";
import WishList from "./components/WishListContent/WishListContent";
import { useCategory } from "./Context/CategoryContext";

function App() {
  const { newCopyOfCategories } = useCategory();
  const productCategoryRoute = newCopyOfCategories?.map(category => (
    <React.Fragment key={category}>
      <Route path="category" element={<CategoryLayout />}>
        <Route
          path={`${category}`}
          element={<ProductByCategory category={category} />}
        />
        <Route
          path="all-products"
          element={<AllProducts category={category} />}
        />
        <Route path={`${category}/:id`} element={<EachProducts />} />
      </Route>
    </React.Fragment>
  ));

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          {productCategoryRoute}
          <Route path="/wishlist" element={<WishList />} />
          {/* <Route path="*" element={<h1>Not found</h1>} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
