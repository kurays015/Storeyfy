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
  const { addToWishList } = useWishList();
  return (
    <div style={{ margin: "5em 0 0 13em" }}>
      <h1 className="related-title">Related Products</h1>
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
            <div className="explore-card" key={id}>
              <Link to={`/category/${category}/${id}`}>
                <div className="img-container">
                  <img src={thumbnail} alt={title} className="thumbnail" />
                </div>
              </Link>

              <div className="details">
                <Link to={`${id}`}>
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
                  <AiOutlineHeart
                    title="add to wishlist"
                    className="addToWishlist-Btn"
                    onClick={() =>
                      addToWishList({ id, title, thumbnail, price })
                    }
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

export default RelatedProducts;
