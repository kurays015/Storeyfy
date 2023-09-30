import { useContext } from "react";
import { CartContext } from "../../Context/MyContext";
function CartContent() {
  const { showCart, setShowCart } = useContext(CartContext);
  return (
    <div
      className={`${showCart ? "cart-overlay" : ""}`}
      onClick={() => setShowCart(false)}
    >
      <div className={`cart-container ${showCart ? "cart-show" : ""}`}>
        <div className="cart-header">
          <h4>Your Shopping Cart (0)</h4>
          <button onClick={() => setShowCart(false)}>X</button>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}

export default CartContent;
