import { useWishList } from "../../Context/WishListContext";
import emptyWishlist from "/images/shopping-cart.png";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { StarRatings } from "../../utils/StarRatings";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
//react icons
import { FaCartArrowDown } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

function WishList() {
  const { wishListItems, removeFromWishlist } = useWishList();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const navigateToCategory = (category, id) => {
    // Remove "wishlist" from the current path and navigate to the new path
    navigate(`/category/${category}/${id}`);
  };
  return (
    <div className="wishlist-container">
      <h1>My wishlist({wishListItems.length})</h1>
      {wishListItems.length ? (
        <div className="wishlist-grid">
          {wishListItems.map(
            ({ id, category, title, rating, price, discount, thumbnail }) => (
              <div key={id} className="wishlist-card">
                <div className="wishlist-discount">
                  {Math.round(discount)}% OFF!
                </div>
                <div
                  className="wishlist-img-container"
                  onClick={() => navigateToCategory(category, id)}
                >
                  <img src={thumbnail} alt={title} className="wishlist-img" />
                </div>
                <div className="wishlist-details">
                  <div>
                    <h4
                      className="wishlist-title"
                      onClick={() => navigateToCategory(category, id)}
                    >
                      {title}
                    </h4>
                    <p className="wishlist-price">{CurrencyFormatter(price)}</p>
                    <div>{StarRatings(rating)}</div>
                  </div>
                  <div className="wishlist-moveToCart">
                    <FaCartArrowDown
                      title="move to cart"
                      className="move-tocart-icon"
                      onClick={() => addToCart({ id, title, thumbnail, price })}
                    />
                    <RiDeleteBin6Fill
                      title="remove from wishlist"
                      className="remove-icon"
                      onClick={() => removeFromWishlist(id)}
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="empty-wishlist">
          <img src={emptyWishlist} alt="empty-wishlist" />
          <h2>Your wishlist is empty</h2>
        </div>
      )}
    </div>
  );
}

export default WishList;
