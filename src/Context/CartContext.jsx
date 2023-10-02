import { createContext, useState, useEffect } from "react";
import imgPlaceholder from "/images/placeholder.jpg";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(1);
  //set the default/main img to placeholder
  const [currentImage, setCurrentImage] = useState(imgPlaceholder);

  //refactore some codes - christts
  function increaseQuantity() {
    setCartQuantity(prev => prev + 1);
  }
  function decreaseQuantity() {
    setCartQuantity(prev => prev - 1);
  }
  function cartPrice(price) {
    return price * cartQuantity;
  }
  function addToCart(data) {
    //data is getting undefined on the first load, need to make sure it,s true
    if (data) {
      //product data that will push to cart
      const productToPushInTheCart = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        price: data.price,
      };
      //check if the product is already in the cart
      const isAlreadyInTheCart = cartItems.find(
        item => item.id === productToPushInTheCart.id
      );
      if (isAlreadyInTheCart) {
        //if it's already in the cart and matches it's id, just add quantity to it and + 1 it
        setCartItems(
          cartItems.map(item =>
            item.id === productToPushInTheCart.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        //else if it's not in the cart, combine the current items that are already in the cart and the productToPushInTheCart items
        setCartItems([
          ...cartItems,
          { ...productToPushInTheCart, quantity: 1 },
        ]);
      }
    }
  }
  function handleImageHoverAndClick(img) {
    setCurrentImage(img);
  }

  const value = {
    cartItems,
    setCartItems,
    showCart,
    setShowCart,
    cartQuantity,
    setCartQuantity,
    handleImageHoverAndClick,
    increaseQuantity,
    decreaseQuantity,
    addToCart,
    currentImage,
    setCurrentImage,
    cartPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
