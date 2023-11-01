import { StarRatings } from "../../utils/StarRatings";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
//react icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useWishList } from "../../Context/WishlistContext";
function RelatedProducts({ filtered }) {
  const { addToCart } = useCart();
  const { addToWishList, isInWishList, removeFromWishlist } = useWishList();
  return (
    <div>
      <div className="topic-related-products">
        <div className="blank"></div>
        <h5>Related Items</h5>
      </div>
      <div className="related-products-container">
        {filtered.map(
          ({
            title,
            price,
            rating,
            discountPercentage,
            thumbnail,
            id,
            category,
          }) => (
            <div className="related-card" key={id}>
              <Link to={`/category/${category}/${id}`}>
                <div className="img-container">
                  <img src={thumbnail} alt={title} className="thumbnail" />
                </div>
              </Link>

              <div className="details">
                <Link to={`/category/${category}/${id}`}>
                  <h4>{title}</h4>
                </Link>
                <div>
                  <h4>{StarRatings(rating)}</h4>
                </div>
                <div className="price-rating">
                  <div>{CurrencyFormatter(price)}</div>
                  <del>
                    {CurrencyFormatter(
                      price / (1 - Math.round(discountPercentage) / 100)
                    )}
                  </del>
                </div>
                <div className="discount">
                  {Math.round(discountPercentage)}% OFF!
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
          )
        )}
      </div>
    </div>
  );
}

export default RelatedProducts;
