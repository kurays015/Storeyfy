import { allProducts } from "../../FetchProductsDetails";
import { Link } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
function AllProducts({ category }) {
  const { data } = allProducts();
  return (
    <div className="all-products-parentContainer">
      <h1 className="category-name">
        {category === "smartphones" ? "All Products" : ""}
      </h1>
      <div className="search">
        <label>
          <HiMagnifyingGlass />
        </label>
        <input type="text" placeholder="search product" />
      </div>
      <div className="product-container">
        {data?.products.map(
          ({ title, price, rating, discountPercentage, thumbnail, id }) => (
            <Link to={`${id}`}>
              <div key={id} className="product-card">
                <div className="discount">
                  {Math.round(discountPercentage)}% OFF!
                </div>
                <img src={thumbnail} className="product-img" />
                <div className="product-details">
                  <div>
                    <h2 className="product-title">{title}</h2>
                  </div>
                  <div className="price">${price}</div>
                  <div className="rating">rating: {rating}</div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default AllProducts;
