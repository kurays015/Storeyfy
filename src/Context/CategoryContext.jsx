import { createContext, useContext } from "react";
import { allCategories } from "../utils/useFetchData";

const CategoryContext = createContext();

export function useCategory() {
  return useContext(CategoryContext);
}

export function CategoryProvider({ children }) {
  const { data: categories } = allCategories();
  const newCopyOfCategories = categories ? [...categories, "all-products"] : [];

  const value = { newCopyOfCategories };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
