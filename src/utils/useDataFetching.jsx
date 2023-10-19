import { useQuery } from "react-query";
import axios from "axios";

// Custom hook to fetch data and handle loading/error states
export const useDataFetching = (queryKey, url) => {
  const { data, isLoading, isError } = useQuery(queryKey, async () => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      alert(error.message);
      throw new Error("Error fetching data");
    }
  });
  return { data, isLoading, isError };
};

export const allProducts = () => {
  return useDataFetching(
    "allProducts",
    "https://dummyjson.com/products?limit=100"
  );
};

export const allCategories = () => {
  return useDataFetching(
    "allCategories",
    "https://dummyjson.com/products/categories"
  );
};

export const fetchEachProductById = id => {
  return useDataFetching("eachProduct", `https://dummyjson.com/products/${id}`);
};

export const productPerCategory = category => {
  return useDataFetching(
    "peroductPerCategory",
    `https://dummyjson.com/products/category/${category}`
  );
};
