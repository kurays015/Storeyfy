import Navigation from "../HeaderNav/Navigation";
import CartContent from "../../components/CartContent/CartContent";
import { Outlet } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useWishList } from "../../Context/WishlistContext";
import Footer from "../Footer/Footer";
function Layout({ newCopyOfCategories }) {
  const {
    alreadyInTheCart,
    showCartMessage,
    shake,
    showWishlistMessage,
    showMessageContainer,
  } = useCart();
  const { alreadyInTheWishlist } = useWishList();

  function showMessageNotif() {
    if (showCartMessage) {
      return (
        <p>
          {alreadyInTheCart
            ? "The item is already in the cart!"
            : "The item has been added to cart."}
        </p>
      );
    } else if (showWishlistMessage) {
      return (
        <p>
          {alreadyInTheWishlist
            ? "The item has been removed from the wishlist."
            : "The item has been added to wishlist."}
        </p>
      );
    }
  }
  return (
    <div className="layout-container">
      <div
        className={`message-notif ${showMessageContainer ? "show" : ""} ${
          shake ? "shake-element" : ""
        }`}
      >
        {showMessageNotif()}
      </div>
      <CartContent />
      <Navigation />
      <Outlet />
      <Footer newCopyOfCategories={newCopyOfCategories} />
    </div>
  );
}

export default Layout;
