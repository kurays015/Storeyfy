import { useQuery } from "react-query";
import axios from "axios";

// Custom hook to fetch data and handle loading/error states
export const useFetchData = (queryKey, url, limit, skip) => {
  const { data, isLoading, isError, error } = useQuery(
    [queryKey, limit, skip],
    async () => {
      const { data } = await axios.get(url);
      return data;
    },
    {
      onError: error => console.error(`Error in query ${queryKey}:`, error),
      onSettled: (_, error) =>
        console.log(
          `Query ${queryKey} has settled. Error: ${
            error ? error.message : "None"
          }`
        ),
    }
  );
  return { data, isLoading, isError, error };
};

export const allProducts = (limit, skip) => {
  return useFetchData(
    `getProducts-${limit}-${skip}`,
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,thumbnail,price,id,discountPercentage,rating`,
    limit,
    skip
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
    `eachProduct-${id}`,
    `https://dummyjson.com/products/${id}`
  );
};

export const productPerCategory = category => {
  return useFetchData(
    `getProductsByCategory-${category}`,
    `https://dummyjson.com/products/category/${category}`
  );
};

export const randomProducts = () => {
  return useFetchData(
    "randomProducts",
    "https://dummyjson.com/products?limit=100"
  );
};
