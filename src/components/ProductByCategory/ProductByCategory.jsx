import { useDataFetching } from "../../FetchProductsDetails";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
function ProductByCategory({ category }) {
  const productPerCategory = () => {
    return useDataFetching(
      `getProductsByCategory-${category}`,
      `https://dummyjson.com/products/category/${category}`
    );
  };
  const { data, isLoading, isError } = productPerCategory();
  if (isLoading) return <h1 className="loading">Loading data...</h1>;
  if (isError) return <h1>Error!</h1>;

  return (
    <div className="product-byCategory">
      <h1 className="category-name">
        {category
          .replace("-", " ")
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </h1>
      <div className="search">
        <label>
          <HiMagnifyingGlass />
        </label>
        <input type="text" placeholder="search product" />
      </div>
      <div className="product-container">
        {data?.products.map(
          ({ title, price, rating, discountPercentage, thumbnail, id }) => (
            <Link to={`${id}`}>
              <div key={id} className="product-card">
                <div className="discount">
                  {Math.round(discountPercentage)}% OFF!
                </div>
                <img src={thumbnail} className="product-img" />
                <div className="product-details">
                  <div>
                    <h2 className="product-title">{title}</h2>
                  </div>
                  <div className="price">${price}</div>
                  <div className="rating">rating: {rating}</div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default ProductByCategory;
