import { useDataFetching } from "../../FetchProductsDetails";
import Categories from "../../components/Categories/Categories";
function ProductByCategory({ category }) {
  const productPerCategory = () => {
    return useDataFetching(
      `getProductsByCategory-${category}`,
      `https://dummyjson.com/products/category/${category}`
    );
  };
  const { data, isLoading, isError } = productPerCategory();
  // if (isLoading) return <h1>Loading!</h1>;
  if (isError) return <h1>Error!</h1>;
  return (
    <div className="product-byCategory">
      <div className="product-container">
        {data?.products?.map(
          ({
            title,
            category,
            description,
            images,
            brand,
            price,
            rating,
            stock,
            discountPercentage,
            thumbnail,
            id,
          }) => (
            <div key={id} className="product-card">
              <h1 className="product-title">{title}</h1>
              <img src={thumbnail} className="product-img" />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ProductByCategory;
//https://dummyjson.com/products/category
