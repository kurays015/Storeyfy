import Navigation from "../HeaderNav/Navigation";
import CartContent from "../../components/CartContent/CartContent";
import { Outlet } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

function Layout() {
  const { cartMessage } = useContext(CartContext);
  return (
    <div style={{ position: "relative" }}>
      <div className={`cart-message ${cartMessage ? "pop-up" : "hide"}`}>
        <p> Item has been added to cart</p>
      </div>
      <CartContent />
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;
