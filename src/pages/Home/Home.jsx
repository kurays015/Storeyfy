import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import { allProducts } from "../../FetchProductsDetails";

function Home({ categories }) {
  const allProductData = allProducts();

  return (
    <div className="banner">
      <div className="category-container">
        {categories.sort().map((category, index) => (
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
