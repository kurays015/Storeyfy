import Navigation from "../HeaderNav/Navigation";
import CartContent from "../../components/CartContent/CartContent";
import { Outlet } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import Footer from "../Footer/Footer";
function Layout() {
  const { alreadyInTheCart, showCartMessage, shake } = useContext(CartContext);
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
      <CartContent />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
