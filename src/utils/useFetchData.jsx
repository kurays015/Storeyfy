import { useQuery } from "react-query";
import axios from "axios";

// Custom hook to fetch data and handle loading/error states
export function useFetchData(queryKey, url) {
  return useQuery(queryKey, async () => {
    const { data } = await axios.get(url);
    return data;
  });
}

export const allProducts = () => {
  return useFetchData(
    "allProducts",
    "https://dummyjson.com/products?limit=100"
  );
};

export const allCategories = () => {
  return useFetchData(
    "getCategories",
    "https://dummyjson.com/products/categories"
  );
};

export const fetchEachProductById = id => {
  return useFetchData(
    "eachProductById",
    `https://dummyjson.com/products/${id}`
  );
};

export const productPerCategory = category => {
  return useFetchData(
    "productsByCategory",
    `https://dummyjson.com/products/category/${category}`
  );
};

export const searchProducts = productSearched => {
  return useFetchData(
    "searchProducts",
    `https://dummyjson.com/products/search?q=${productSearched}`
  );
};
