import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useDataFetching } from "../../FetchProductsDetails";
import { CartContext } from "../../Context/CartContext";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { StarRatings } from "../../utils/StarRatings";
function Products() {
  const { id } = useParams();
  const { handleImageHoverAndClick, currentImage, setCurrentImage, addToCart } =
    useContext(CartContext);

  const fetchEachProductById = () => {
    return useDataFetching(
      `eachProduct-${id}`,
      `https://dummyjson.com/products/${id}`
    );
  };

  const { data } = fetchEachProductById();
  useEffect(() => {
    if (data) {
      setCurrentImage(data.thumbnail);
    }
  }, [data]);

  return (
    <>
      <div className="each-productContainer">
        <div className="images-container">
          <div className="main-img-container">
            <img src={currentImage} alt={data?.title} className="main-img" />
          </div>
          <div className="swiper-container">
            {data?.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={data?.title}
                className="each-slide-img"
                onMouseEnter={() => handleImageHoverAndClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="product-specs">
          <div>Brand: {data?.brand}</div>
          <div>Category: {data?.category}</div>
          <p>
            Stock:{" "}
            <span className={data?.stock <= 10 ? "out-of-stock" : "in-stock"}>
              {data?.stock}
            </span>{" "}
            left
          </p>
          <h2 className="prod-title">{data?.title.toUpperCase()}</h2>
          <div className="stars-rating-container">
            Rating: {StarRatings(data?.rating)}
          </div>
          <div>
            <div>Description:</div>
            <p>{data?.description}</p>
          </div>
          <div className="prod-price">
            Price: <span>{CurrencyFormatter(data?.price)}</span>
          </div>
          <div className="cartbuy-btn">
            <button className="buynow-btn">Buy Now</button>
            <button className="addtocart-btn" onClick={() => addToCart(data)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
