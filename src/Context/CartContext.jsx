import { createContext, useState } from "react";
import imgPlaceholder from "/images/placeholder.jpg";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  //set the default/main img to placeholder
  const [currentImage, setCurrentImage] = useState(imgPlaceholder);

  function increaseQuantity(id) {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
  function decreaseQuantity(id) {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }
  function handleImageHoverAndClick(img) {
    setCurrentImage(img);
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
        quantity: 1,
      };
      //check if the product is already in the cart
      const isAlreadyInTheCart = cartItems.find(
        item => item.id === productToPushInTheCart.id
      );
      //if it's not in the cart
      if (!isAlreadyInTheCart) {
        setCartItems([...cartItems, productToPushInTheCart]);
      }
    }
  }
  function cartTotalPrice() {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  }
  function removeProducts(id) {
    const removeItem = cartItems.filter(item => item.id !== id);
    setCartItems(removeItem);
  }
  const value = {
    cartItems,
    setCartItems,
    showCart,
    setShowCart,
    handleImageHoverAndClick,
    increaseQuantity,
    decreaseQuantity,
    addToCart,
    currentImage,
    setCurrentImage,
    cartTotalPrice,
    removeProducts,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
