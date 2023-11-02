import React from "react";
import { Link } from "react-router-dom";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { StarRatings } from "../../utils/StarRatings";
import { CategoryTitle } from "../../utils/CategoryTitle";
import { productPerCategory } from "../../utils/useFetchData";
import { useCart } from "../../Context/CartContext";
//react icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useWishList } from "../../Context/WishlistContext";

function ProductByCategory({ category }) {
  const { data, isLoading, isError } = productPerCategory(category);
  const { addToWishList, isInWishList, removeFromWishlist } = useWishList();
  const { addToCart } = useCart();

  if (isLoading) return <h1 className="loading">Loading products...</h1>;
  if (isError) return <h1>Error!</h1>;

  return (
    <div className="product-byCategory">
      <h1 className="category-name">{CategoryTitle(category)}</h1>
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
                    <FaCartPlus
                      title="add to cart"
                      className="addToCart-Btn"
                      onClick={() => addToCart({ id, title, thumbnail, price })}
                    />
                  </div>
                  <div>
                    {isInWishList(id) ? (
                      <AiFillHeart
                        onClick={() => removeFromWishlist(id)}
                        className="add-removeToWishlist-Btn"
                      />
                    ) : (
                      <AiOutlineHeart
                        onClick={() =>
                          addToWishList({
                            title,
                            price,
                            rating,
                            discountPercentage,
                            thumbnail,
                            id,
                            category,
                          })
                        }
                        className="add-removeToWishlist-Btn"
                      />
                    )}
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
