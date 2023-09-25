import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import { allProducts } from "../../FetchProductsDetails";
import Categories from "../../components/Categories/Categories";
import { BsArrowRight } from "react-icons/bs";

function Home({ categories }) {
  const allProductData = allProducts();

  return (
    <div className="banner">
      <div className="show-now">
        <Link to="category">Show now!</Link>
        <div className="arrow">
          <BsArrowRight />
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default Home;
