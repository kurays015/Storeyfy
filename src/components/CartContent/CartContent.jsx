import React, { useEffect } from "react";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import emptyCartImg from "/images/emptycart.png";
import { RxExit } from "react-icons/rx";
import { HiXMark } from "react-icons/hi2";
import { useCart } from "../../Context/CartContext";
import { ScrollBarRemover } from "../../utils/ScrollBarRemover";

function CartContent() {
  const {
    showCart,
    setShowCart,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    cartTotalPrice,
    removeProducts,
  } = useCart();

  const cartTotal = cartTotalPrice();

  useEffect(() => {
    ScrollBarRemover(showCart);
  }, [showCart]);

  return (
    <>
      <div
        className={`${showCart ? "cart-overlay" : ""}`}
        onClick={() => setShowCart(false)}
      ></div>
      <div className={`cart-container ${showCart ? "cart-show" : ""}`}>
        <div className="cart-header">
          <h4>Your Shopping Cart ({cartItems.length})</h4>
          <RxExit
            onClick={() => setShowCart(false)}
            className="cart-exit-btn"
          />
        </div>
        {cartItems.length ? (
          <>
            <div className="full-cart">
              {cartItems.map(({ id, title, price, thumbnail, quantity }) => (
                <div className="cart-product-container" key={id}>
                  <button
                    className="product-remove"
                    onClick={() => removeProducts(id)}
                  >
                    <HiXMark />
                  </button>
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
            <p>Your cart is empty...</p>
          </div>
        )}
      </div>
    </>
  );
}

export default CartContent;
