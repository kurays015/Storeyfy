import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function useWishList() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const value = {};
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}
