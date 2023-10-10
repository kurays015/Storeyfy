import { createContext, useContext, useState } from "react";
import { useCart } from "../Context/CartContext";

const WishlistContext = createContext();

export function useWishList() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const [wishListItems, setWishListItems] = useState([]);
  const [alreadyInTheWishlist, setAlreadyInTheWishlist] = useState(false);
  const [showWishlistMessage, setShowWishlistMessage] = useState(false);
  const { setShake } = useCart();

  function addToWishList(data) {
    setAlreadyInTheWishlist(false);
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
      const isAlreadyInTheWishlist = wishListItems.find(
        item => item.id === productToPushInTheCart.id
      );
      //if it's not in the cart
      if (!isAlreadyInTheWishlist) {
        setWishListItems([...wishListItems, productToPushInTheCart]);
      } else {
        //if already in the cart
        setAlreadyInTheWishlist(true);
        setShake(true);

        setTimeout(() => setShake(false), 500);
      }
    }
    //added to cart message
    setShowWishlistMessage(true);
    setTimeout(() => setShowWishlistMessage(false), 3000);
  }
  const value = { addToWishList, wishListItems };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}
