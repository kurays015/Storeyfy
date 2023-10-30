import { createContext, useContext, useState, useEffect } from "react";
import { useCart } from "./CartContext";

const WishlistContext = createContext();

export function useWishList() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const wishListItemsFromLocalStorage = JSON.parse(
    localStorage.getItem("wishListItems")
  );
  const [wishListItems, setWishListItems] = useState(
    () => wishListItemsFromLocalStorage || []
  );
  const [alreadyInTheWishlist, setAlreadyInTheWishlist] = useState(false);

  const {
    setShowCartMessage,
    setShowWishlistMessage,
    setShowMessageContainer,
  } = useCart();

  function isInWishList(id) {
    return wishListItems.some(item => item.id === id);
  }

  function addToWishList(productData) {
    setShowCartMessage(false);
    setShowMessageContainer(true);
    setShowWishlistMessage(true);
    //productData is getting undefined on the first load, need to make sure it's true
    if (productData) {
      //check if it's in the wishlist or not
      const isAlreadyInTheWishList = wishListItems.some(
        item => item.id === productData.id
      );
      //if it's not in the wishlist, add it
      if (!isAlreadyInTheWishList) {
        setAlreadyInTheWishlist(false);
        setWishListItems([...wishListItems, productData]);
      }
    }
    setTimeout(() => setShowMessageContainer(false), 3000);
  }

  function removeFromWishlist(id) {
    //remove item from wishlist and remove the filled heart icon
    const removeWishListItems = wishListItems.filter(item => item.id !== id);
    setWishListItems(removeWishListItems);
    setAlreadyInTheWishlist(true);
  }

  useEffect(() => {
    localStorage.setItem("wishListItems", JSON.stringify(wishListItems));
  }, [wishListItems]);

  const value = {
    addToWishList,
    wishListItems,
    alreadyInTheWishlist,
    removeFromWishlist,
    isInWishList,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}
