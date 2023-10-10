import { useWishList } from "../../Context/WishlistContext";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { StarRatings } from "../../utils/StarRatings";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
//react icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
function WishList() {
  const { wishListItems, addToWishList } = useWishList();
  const { addToCart } = useCart();
  return (
    <div className="wishlist-container">
      <h1>my wishlist</h1>
      <div className="wishlist-grid">
        {wishListItems.map(
          ({
            id,
            category,
            title,
            rating,
            price,
            discountPercentage,
            thumbnail,
          }) => (
            <div key={id} className="wishlist-card">
              <div className="discount">
                {Math.round(discountPercentage)}% OFF!
              </div>
              <div className="wishlist-img-container">
                <img src={thumbnail} alt={title} className="wishlist-img" />
              </div>
              <div className="wishlist-details">
                <div>
                  <h4 className="wishlist-title">{title}</h4>
                  <p className="wishlist-price">{CurrencyFormatter(price)}</p>
                </div>
                <div className="wishlist-moveToCart">
                  <FaCartArrowDown
                    title="move to cart"
                    className="move-tocart-icon"
                    onClick={() => addToCart({ id, title, thumbnail, price })}
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default WishList;
