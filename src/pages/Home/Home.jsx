import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";

function Home({ newCategory }) {
  return (
    <div className="banner">
      <div className="category-container">
        {newCategory.sort().map((category, index) => (
          <li key={index}>
            <Link to={`/${category}`}>{category}</Link>
          </li>
        ))}
      </div>
      <div>
        <h1>Show now!</h1>
      </div>
      <div className="carousel1">
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
