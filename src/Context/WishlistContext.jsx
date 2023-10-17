import { createContext, useContext, useState, useEffect } from "react";
import { useCart } from "./CartContext";

const WishlistContext = createContext();

export function useWishList() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const wishListItemsFromLocalStorage = JSON.parse(
    localStorage.getItem("wishListItems") || "[]"
  );
  const [wishListItems, setWishListItems] = useState(
    wishListItemsFromLocalStorage
  );
  const [alreadyInTheWishlist, setAlreadyInTheWishlist] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const {
    setShowCartMessage,
    setShowWishlistMessage,
    setShowMessageContainer,
  } = useCart();

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
      } else {
        //if it's already in the wishlist, remove it
        setAlreadyInTheWishlist(true);
        const updatedWishList = wishListItems.filter(
          item => item.id !== productData.id
        );
        setWishListItems(updatedWishList);
      }
    }
    setTimeout(() => setShowMessageContainer(false), 3000);
  }

  function removeFromWishlist(id) {
    const remove = wishListItems.filter(item => item.id !== id);
    setWishListItems(remove);
  }

  useEffect(() => {
    localStorage.setItem("wishListItems", JSON.stringify(wishListItems));
  }, [wishListItems]);

  const value = {
    addToWishList,
    wishListItems,
    alreadyInTheWishlist,
    removeFromWishlist,
    isHeartFilled,
  };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}
