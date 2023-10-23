import { createContext, useContext, useState } from "react";

const BurgerMenuContext = createContext();

export function useBurgerMenu() {
  return useContext(BurgerMenuContext);
}

export function BurgerMenuProvider({ children }) {
  const [showBurgerNavMenu, setShowBurgerNavMenu] = useState(false);

  function handleBugerMenuToggle() {
    setShowBurgerNavMenu(false);
  }

  const value = {
    showBurgerNavMenu,
    setShowBurgerNavMenu,
    handleBugerMenuToggle,
  };

  return (
    <BurgerMenuContext.Provider value={value}>
      {children}
    </BurgerMenuContext.Provider>
  );
}
