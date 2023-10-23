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

  const heartFilledFromLocalStorage = JSON.parse(
    localStorage.getItem("heartFilled")
  );

  const [likedItemsId, setLikedItemsId] = useState(
    () => heartFilledFromLocalStorage || []
  );

  const {
    setShowCartMessage,
    setShowWishlistMessage,
    setShowMessageContainer,
  } = useCart();

  function isInWishList(id) {
    return likedItemsId.includes(id);
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
        setLikedItemsId([...likedItemsId, productData.id]);
      }
    }
    setTimeout(() => setShowMessageContainer(false), 3000);
  }

  function removeFromWishlist(id) {
    //remove heart filled from wishlist items
    const removeLikedItems = likedItemsId.filter(itemId => itemId !== id);
    setLikedItemsId(removeLikedItems);
    //remove item from wishlist
    const removeWishListItems = wishListItems.filter(item => item.id !== id);
    setWishListItems(removeWishListItems);
    setAlreadyInTheWishlist(true);
  }

  useEffect(() => {
    localStorage.setItem("wishListItems", JSON.stringify(wishListItems));
    localStorage.setItem("heartFilled", JSON.stringify(likedItemsId));
  }, [wishListItems, likedItemsId]);

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
