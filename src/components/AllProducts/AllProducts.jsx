import React from "react";
import { allProducts } from "../../FetchProductsDetails";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { Link } from "react-router-dom";
import { StarRatings } from "../../utils/StarRatings";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
//react icons
import {
  AiOutlinePlusCircle,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";

function AllProducts({ category }) {
  const { data } = allProducts();
  const { addToCart } = useContext(CartContext);
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
            <React.Fragment key={id}>
              <div className="product-card">
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
                  <div className="rating">{StarRatings(rating)}</div>
                  <div className="price">
                    <div>{CurrencyFormatter(price)}</div>
                    <del>
                      {CurrencyFormatter(
                        price / (1 - Math.round(discountPercentage) / 100)
                      )}
                    </del>
                  </div>
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

export default AllProducts;
