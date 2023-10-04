import React, { useContext } from "react";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { CartContext } from "../../Context/CartContext";
import emptyCartImg from "/images/emptycart.png";
function CartContent() {
  const {
    showCart,
    setShowCart,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    cartTotalPrice,
  } = useContext(CartContext);

  const cartTotal = cartTotalPrice();

  return (
    <>
      <div
        className={`${showCart ? "cart-overlay" : ""}`}
        onClick={() => setShowCart(false)}
      ></div>
      <div className={`cart-container ${showCart ? "cart-show" : ""}`}>
        <div className="cart-header">
          <h4>Your Shopping Cart ({cartItems.length})</h4>
          <button onClick={() => setShowCart(false)} className="cart-exit-btn">
            X
          </button>
        </div>
        {cartItems.length ? (
          <>
            <div className="full-cart">
              {cartItems.map(({ id, title, price, thumbnail, quantity }) => (
                <div className="cart-product-container" key={id}>
                  <div className="cart-img-container">
                    <img src={thumbnail} alt={title} className="cart-img" />
                  </div>
                  <div className="cart-t-q">
                    <div>
                      <h5 className="cart-title">{title}</h5>
                    </div>
                    <div className="inc-dec-q">
                      <button onClick={() => decreaseQuantity(id)}>-</button>
                      <p className="cart-quantity-count">{quantity}</p>
                      <button onClick={() => increaseQuantity(id)}>+</button>
                    </div>
                  </div>
                  <div className="cart-price">
                    {CurrencyFormatter(price * quantity)}
                  </div>
                </div>
              ))}
            </div>
            <div className="total-cart-price">
              <h1>Total:</h1>
              <div className="checkout">
                <h3>{CurrencyFormatter(cartTotal)}</h3>
                <button>Checkout</button>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <img src={emptyCartImg} alt="empty-cart-img" />
            <p>your cart is empty...</p>
          </div>
        )}
      </div>
    </>
  );
}

export default CartContent;
