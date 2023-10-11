import Navigation from "../HeaderNav/Navigation";
import CartContent from "../../components/CartContent/CartContent";
import { Outlet } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import Footer from "../Footer/Footer";
import { useWishList } from "../../Context/WishlistContext";
function Layout() {
  const {
    alreadyInTheCart,
    showCartMessage,
    shake,
    showWishlistMessage,
    showMessageContainer,
  } = useCart();
  const { alreadyInTheWishlist } = useWishList();

  function messageNotif() {
    if (showCartMessage) {
      return (
        <p>
          {alreadyInTheCart
            ? "Item is already in the cart!"
            : "Item has been added to cart."}
        </p>
      );
    } else if (showWishlistMessage) {
      return (
        <p>
          {alreadyInTheWishlist
            ? "Item is already in the wishlist!"
            : "Item has been added to wishlist."}
        </p>
      );
    }
  }
  return (
    <div style={{ position: "relative" }}>
      <div
        className={`message-notif ${showMessageContainer ? "show" : ""} ${
          shake ? "shake-element" : ""
        }`}
      >
        {messageNotif()}
      </div>
      <CartContent />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
