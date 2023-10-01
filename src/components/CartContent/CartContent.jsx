import { useContext } from "react";
import { CartContext } from "../../Context/MyContext";
function CartContent() {
  const { showCart, setShowCart, cartItems, cartQuantity } =
    useContext(CartContext);

  const item = cartItems.map((item, index) => (
    <div key={index}>
      <h5>{item.title}</h5>p
    </div>
  ));
  // console.log(cartItems);
  return (
    <div
      className={`${showCart ? "cart-overlay" : ""}`}
      // onClick={() => setShowCart(false)}
    >
      <div className={`cart-container ${showCart ? "cart-show" : ""}`}>
        <div className="cart-header">
          <h4>Your Shopping Cart ({cartItems.length})</h4>
          <button onClick={() => setShowCart(false)}>X</button>
        </div>
        <div>{item}</div>
      </div>
    </div>
  );
}

export default CartContent;
