import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import { allProducts } from "../../FetchProductsDetails";
import Categories from "../../components/Categories/Categories";

function Home({ categories }) {
  const allProductData = allProducts();

  return (
    <div className="banner">
      <div>
        <Categories originalCategories={categories} />
      </div>
      <Carousel />
    </div>
  );
}

export default Home;
