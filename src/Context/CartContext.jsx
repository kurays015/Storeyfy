import { createContext, useState, useEffect } from "react";
import imgPlaceholder from "/images/placeholder.jpg";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(1);
  //set the default/main img to placeholder
  const [currentImage, setCurrentImage] = useState(imgPlaceholder);

  function handleImageHoverAndClick(img) {
    setCurrentImage(img);
  }
  function addQuantity() {
    setCartQuantity(prev => prev + 1);
  }
  function minusQuantity() {
    if (cartQuantity > 1) {
      setCartQuantity(prev => prev - 1);
    }
  }
  function addToCart(data) {
    if (data) {
      const productInTheCart = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        price: data.price,
      };
      if (!cartItems.some(item => item.id === productInTheCart.id)) {
        setCartItems(prevItem => [...prevItem, productInTheCart]);
      }
    }
  }
  function cartPrice(price) {
    return price * cartQuantity;
  }

  const value = {
    cartItems,
    setCartItems,
    showCart,
    setShowCart,
    cartQuantity,
    setCartQuantity,
    handleImageHoverAndClick,
    addQuantity,
    minusQuantity,
    addToCart,
    currentImage,
    setCurrentImage,
    cartPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
