import { useDataFetching } from "../../FetchProductsDetails";
//this contains the fetched product data by category
function ProductByCategory({ categories }) {
  const productPerCategory = category => {
    return useDataFetching(
      `getProductsByCategory-${category}`,
      `https://dummyjson.com/products/category/${category}`
    );
  };
  const categoryData = categories?.map(category =>
    productPerCategory(category)
  );
  console.log(categoryData);

  return (
    <div>
      <h1>ProductByCategory</h1>
      <p>contains product</p>
    </div>
  );
}

export default ProductByCategory;
//https://dummyjson.com/products/category
