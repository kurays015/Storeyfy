import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
function CartContent() {
  const {
    showCart,
    setShowCart,
    cartItems,
    cartQuantity,
    setCartQuantity,
    cartPrice,
  } = useContext(CartContext);

  function increaseItemQuantity() {
    setCartQuantity(prevItem => prevItem + 1);
  }
  function decreaseItemQuantity() {
    if (cartQuantity > 1) {
      setCartQuantity(prevItem => prevItem - 1);
    }
  }

  const item = cartItems.map((item, index) => (
    <div key={index}>
      <h5>{item.title}</h5>
      <div>quantity:{cartQuantity}</div>
      <div>
        <button onClick={decreaseItemQuantity}>-</button>
        <p>{cartPrice(item.price)}</p>

        <button onClick={increaseItemQuantity}>+</button>
      </div>
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
