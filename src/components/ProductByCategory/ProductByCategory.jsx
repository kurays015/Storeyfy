import { useDataFetching } from "../../FetchProductsDetails";
//this contains the fetched product data by category
function ProductByCategory({ category }) {
  const productPerCategory = () => {
    return useDataFetching(
      `getProductsByCategory-${category}`,
      `https://dummyjson.com/products/category/${category}`
    );
  };
  const { data, isLoading, isError } = productPerCategory();
  console.log(data);
  if (isLoading) return <h1>Loading!</h1>;
  if (isError) return <h1>Error!</h1>;
  return (
    <div>
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
          <div key={id}>
            <h1>{title}</h1>
            <div>
              {images.map(img => (
                <img src={img} />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ProductByCategory;
//https://dummyjson.com/products/category
