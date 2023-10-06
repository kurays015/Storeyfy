import { useDataFetching } from "../../FetchProductsDetails";
import { Link } from "react-router-dom";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { StarRatings } from "../../utils/StarRatings";
import { CategoryTitle } from "../../utils/CategoryTitle";
//react icons
import {
  AiOutlinePlusCircle,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";

function ProductByCategory({ category }) {
  const productPerCategory = () => {
    return useDataFetching(
      `getProductsByCategory-${category}`,
      `https://dummyjson.com/products/category/${category}`
    );
  };
  const { data, isLoading, isError } = productPerCategory();
  if (isLoading) return <h1 className="loading">Loading data...</h1>;
  if (isError) return <h1>Error!</h1>;

  return (
    <div className="product-byCategory">
      <h1 className="category-name">{CategoryTitle(category)}</h1>
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
                  <div className="price">
                    <div>{CurrencyFormatter(price)}</div>
                    <del>
                      {CurrencyFormatter(
                        price / (1 - Math.round(discountPercentage) / 100)
                      )}
                    </del>
                  </div>
                  <div className="rating">{StarRatings(rating)}</div>
                </div>
                <div className="shortcut-icons">
                  <div>
                    <AiOutlinePlusCircle
                      className="addToCart-Btn"
                      onClick={() => addToCart({ id, title, thumbnail, price })}
                    />
                  </div>
                  <div>
                    <AiOutlineHeart className="addToWishlist-Btn" />
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

export default ProductByCategory;
