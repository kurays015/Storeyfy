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
    setShake,
    setShowCartMessage,
    setShowWishlistMessage,
    setShowMessageContainer,
  } = useCart();

  function addToWishList(data) {
    setShowCartMessage(false);
    setAlreadyInTheWishlist(false);
    //data is getting undefined on the first load, need to make sure it's true
    if (data) {
      //product data that will push to wishlist
      const productToPushInTheWishlist = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        price: data.price,
        discount: data.discountPercentage,
        rating: data.rating,
        category: data.category,
      };
      //check if the product is already in the wishlist
      const isAlreadyInTheWishlist = wishListItems.find(
        item => item.id === productToPushInTheWishlist.id
      );
      //if it's not in the wishlist
      if (!isAlreadyInTheWishlist) {
        setWishListItems([...wishListItems, productToPushInTheWishlist]);
        // setIsHeartFilled(true);
      } else {
        //if already in the wishlist
        setAlreadyInTheWishlist(true);
        // setIsHeartFilled(false);
        setShake(true);

        setTimeout(() => setShake(false), 500);
      }
    }
    //added to wishlist message
    setShowWishlistMessage(true);
    setShowMessageContainer(true);
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
  console.log("working again?!");
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}
