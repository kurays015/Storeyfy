import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(1);

  const value = {
    cartItems,
    setCartItems,
    showCart,
    setShowCart,
    cartQuantity,
    setCartQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
