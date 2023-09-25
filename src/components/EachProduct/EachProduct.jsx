import { useParams } from "react-router-dom";
import { useDataFetching } from "../../FetchProductsDetails";

function Products() {
  const { id } = useParams();
  // console.log(useDataFetching);
  const fetchEachProductById = () => {
    return useDataFetching(
      `eachProduct-${id}`,
      `https://dummyjson.com/products/${id}`
    );
  };

  const { data } = fetchEachProductById();
  // console.log(data);

  return (
    <div className="each-productContainer">
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
    </div>
  );
}

export default Products;
