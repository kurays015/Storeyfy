import React from "react";
import { allProducts } from "../../utils/FetchProductsDetails";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { Link } from "react-router-dom";
import { StarRatings } from "../../utils/StarRatings";
import { useCart } from "../../Context/CartContext";
//react icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useWishList } from "../../Context/WishlistContext";

function AllProducts({ category }) {
  const { data } = allProducts();
  const { addToCart } = useCart();
  const { addToWishList } = useWishList();

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
          ({
            title,
            price,
            rating,
            discountPercentage,
            thumbnail,
            id,
            category,
          }) => (
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
                    <FaCartPlus
                      title="add to cart"
                      className="addToCart-Btn"
                      onClick={() => addToCart({ id, title, thumbnail, price })}
                    />
                  </div>
                  <div>
                    <AiOutlineHeart
                      title="add to wishlist"
                      className="addToWishlist-Btn"
                      onClick={() =>
                        addToWishList({
                          id,
                          title,
                          thumbnail,
                          price,
                          rating,
                          discountPercentage,
                          category,
                        })
                      }
                    />
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
