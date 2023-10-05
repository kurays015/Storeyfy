import { allProducts } from "../../FetchProductsDetails";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { Link } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { StarRatings } from "../../utils/StarRatings";
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
            <Link to={`${id}`} key={id}>
              <div className="product-card">
                <div className="discount">
                  {Math.round(discountPercentage)}% OFF!
                </div>
                <img src={thumbnail} className="product-img" />
                <div className="product-details">
                  <div>
                    <h2 className="product-title">{title}</h2>
                  </div>
                  <div className="rating">{StarRatings(rating)}</div>
                  <div className="price">
                    <div>{CurrencyFormatter(price)}</div>
                    <del>
                      {CurrencyFormatter(
                        (price * Math.round(discountPercentage)) / 100 + price
                      )}
                    </del>
                  </div>
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
