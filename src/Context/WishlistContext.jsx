import { createContext, useContext, useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

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
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [alreadyInTheWishlist, setAlreadyInTheWishList] = useState(false);
  const {
    setShowCartMessage,
    setShowWishlistMessage,
    setShowMessageContainer,
  } = useCart();

  function addToWishList(productData) {
    setShowMessageContainer(true);
    setShowCartMessage(false);

    //data is getting undefined on the first load, need to make sure it's true
    if (productData) {
      //check if the product is already in the wishlist when product clicked id is matched
      // const isAlreadyInTheWishList = wishListItems.some(
      //   item => item.id === productData.id
      // );
      // //if it's not in the wishlist, add it
      // if (!isAlreadyInTheWishList) {
      //   setIsHeartFilled(true);
      //   setAlreadyInTheWishList(false);
      //   setShowWishlistMessage(true);
      //   setWishListItems([...wishListItems, productData]);
      // } else {
      //   //if it's in the wishlist, remove it using filter
      //   setAlreadyInTheWishList(true);
      //   setIsHeartFilled(false);
      //   const updatedWishlist = wishListItems.filter(
      //     item => item.id !== productData.id
      //   );
      //   setWishListItems(updatedWishlist);
      // }
    }
    setTimeout(() => setShowMessageContainer(false), 4000);
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
    removeFromWishlist,
    alreadyInTheWishlist,
    isHeartFilled,
  };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}
