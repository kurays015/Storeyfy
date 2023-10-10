import { useQuery } from "react-query";
import axios from "axios";

// Custom hook to fetch data and handle loading/error states
export const useDataFetching = (queryKey, url) => {
  const { data, isLoading, isError } = useQuery(queryKey, async () => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching data");
    }
  });
  return { data, isLoading, isError };
};

export const allProducts = () => {
  return useDataFetching(
    "getProducts",
    "https://dummyjson.com/products?limit=100"
  );
};

export const allCategories = () => {
  return useDataFetching(
    "getCategories",
    "https://dummyjson.com/products/categories"
  );
};

export const fetchEachProductById = id => {
  return useDataFetching(
    `eachProduct-${id}`,
    `https://dummyjson.com/products/${id}`
  );
};

export const productPerCategory = category => {
  return useDataFetching(
    `getProductsByCategory-${category}`,
    `https://dummyjson.com/products/category/${category}`
  );
};