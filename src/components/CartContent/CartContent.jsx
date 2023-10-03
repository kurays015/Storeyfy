import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
function CartContent() {
  const {
    showCart,
    setShowCart,
    cartItems,
    setCartItems,
    cartQuantity,
    setCartQuantity,
    cartPrice,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  console.log(cartItems);

  return (
    <div
      className={`${showCart ? "cart-overlay" : ""}`}
      // onClick={() => setShowCart(false)}
    >
      <div className={`cart-container ${showCart ? "cart-show" : ""}`}>
        <div className="cart-header">
          <h4>Your Shopping Cart ({cartItems.length})</h4>
          <button onClick={() => setShowCart(false)} className="cart-exit-btn">
            X
          </button>
        </div>
        <div className="full-cart">
          {cartItems.map(({ id, title, price, thumbnail }) => (
            <div className="cart-product-container" key={id}>
              <div className="cart-img-container">
                <img src={thumbnail} alt={title} className="cart-img" />
              </div>
              <div className="cart-t-q">
                <div>
                  <h5 className="cart-title">{title}</h5>
                </div>
                <div className="cart-btns">
                  <button onClick={decreaseQuantity}>-</button>
                  <p>{cartQuantity}</p>
                  <button onClick={increaseQuantity}>+</button>
                </div>
              </div>
              <div className="cart-price">{cartPrice(price)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartContent;
