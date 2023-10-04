import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useDataFetching } from "../../FetchProductsDetails";
import { CartContext } from "../../Context/CartContext";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
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
                onClick={() => handleImageHoverAndClick(image)}
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
          <h2>{data?.title.toUpperCase()}</h2>
          <div>Rating: {data?.rating} need to fix this, turn to star</div>
          <div>
            <div>Description:</div>
            <p>{data?.description}</p>
          </div>
          <div>{CurrencyFormatter(data?.price)}</div>
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
