import Navigation from "../HeaderNav/Navigation";
import CartContent from "../../components/CartContent/CartContent";
import { Outlet } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import Footer from "../Footer/Footer";
import { useWishList } from "../../Context/WishlistContext";
function Layout() {
  const { alreadyInTheCart, showCartMessage, shake } = useCart();
  const { alreadyInTheWishlist, showWishlistMessage } = useWishList();
  return (
    <div style={{ position: "relative" }}>
      <div
        className={`cart-message ${showCartMessage ? "show" : ""} ${
          shake ? "shake-element" : ""
        }`}
      >
        <p>
          {alreadyInTheCart
            ? "Item is already in the cart!"
            : "Item has been added to cart."}
        </p>
      </div>
      <div
        className={`wishlist-message ${showWishlistMessage ? "show" : ""} ${
          shake ? "shake-element" : ""
        }`}
      >
        <p>
          {alreadyInTheWishlist
            ? "Item is already in the wishlist!"
            : "Item has been added to wishlist."}
        </p>
      </div>
      <CartContent />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
