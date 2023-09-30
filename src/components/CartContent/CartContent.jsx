import { useContext } from "react";
import { CartContext } from "../../Context/MyContext";
function CartContent() {
  const { showCart, setShowCart } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
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
        <div>
          {cartItems.map(({ title, price }) => (
            <div>
              <h3>{title}</h3>
              <p>{price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartContent;
