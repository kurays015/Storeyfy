import { createContext, useState, useEffect, useContext } from "react";
import imgPlaceholder from "/images/placeholder.jpg";
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}
export const CartProvider = ({ children }) => {
  //get the cartItems and parse it back
  const cartItemsFromLocalStorage = JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  );
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);
  const [showCart, setShowCart] = useState(false);
  const [alreadyInTheCart, setAlreadyInTheCart] = useState(false);
  const [showCartMessage, setShowCartMessage] = useState(false);
  const [showWishlistMessage, setShowWishlistMessage] = useState(false);
  const [showMessageContainer, setShowMessageContainer] = useState(false);
  const [shake, setShake] = useState(false);
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
  function addToCart(productData) {
    setAlreadyInTheCart(false);
    setShowWishlistMessage(false);
    //data is getting undefined on the first load, need to make sure it,s true
    if (productData) {
      //check if the product is already in the cart
      const isAlreadyInTheCart = cartItems.some(
        item => item.id === productData.id
      );
      //if it's not in the cart
      if (!isAlreadyInTheCart) {
        setCartItems([...cartItems, { ...productData, quantity: 1 }]);
      } else {
        //if already in the cart
        setAlreadyInTheCart(true);
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    }
    //added to cart message
    setShowCartMessage(true);
    setShowMessageContainer(true);
    setTimeout(() => setShowMessageContainer(false), 3000);
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
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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
    alreadyInTheCart,
    showCartMessage,
    setShake,
    shake,
    setShowCartMessage,
    showWishlistMessage,
    setShowWishlistMessage,
    showMessageContainer,
    setShowMessageContainer,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
