import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { StarRatings } from "../../utils/StarRatings";
import { CategoryTitle } from "../../utils/CategoryTitle";
import { CartContext } from "../../Context/CartContext";
import { productPerCategory } from "../../utils/FetchProductsDetails";
//react icons
import {
  AiOutlinePlusCircle,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";

function ProductByCategory({ category }) {
  const { data, isLoading, isError } = productPerCategory(category);
  if (isLoading) return <h1 className="loading">Loading products...</h1>;
  if (isError) return <h1>Error!</h1>;

  const { addToCart } = useContext(CartContext);

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
            <React.Fragment>
              <div key={id} className="product-card">
                <div className="discount">
                  {Math.round(discountPercentage)}% OFF!
                </div>
                <Link to={`${id}`}>
                  <img src={thumbnail} className="product-img" />
                </Link>
                <div className="product-details">
                  <Link to={`${id}`}>
                    <div>
                      <h2 className="product-title">{title}</h2>
                    </div>
                  </Link>
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
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
}

export default ProductByCategory;
