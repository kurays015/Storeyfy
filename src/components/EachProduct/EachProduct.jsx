import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataFetching } from "../../FetchProductsDetails";
import imgPlaceholder from "/images/placeholder.jpg";

function Products() {
  const { id } = useParams();
  //set the default/main img to placeholder
  const [currentImage, setCurrentImage] = useState(imgPlaceholder);
  const [cartQuantity, setCartQuantity] = useState(1);
  //const {cartQuantity, setCartQuantity} = useContext
  const fetchEachProductById = () => {
    return useDataFetching(
      `eachProduct-${id}`,
      `https://dummyjson.com/products/${id}`
    );
  };
  const { data: EachProductData } = fetchEachProductById();

  useEffect(() => {
    if (EachProductData) {
      setCurrentImage(EachProductData.thumbnail);
    }
  }, [EachProductData]);

  const handleImageHoverAndClick = img => {
    setCurrentImage(img);
  };

  const addQuantity = () => {
    setCartQuantity(prev => prev + 1);
  };

  const minusQuantity = () => {
    if (cartQuantity > 1) {
      setCartQuantity(prev => prev - 1);
    }
  };
  const addToCart = () => {
    console.log(
      EachProductData?.title,
      EachProductData?.price * cartQuantity,
      EachProductData?.thumbnail
    );
  };

  return (
    <>
      <div className="each-productContainer">
        <div className="images-container">
          <div className="main-img-container">
            <img
              src={currentImage}
              alt={EachProductData?.title}
              className="main-img"
            />
          </div>
          <div className="swiper-container">
            {EachProductData?.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={EachProductData?.title}
                className="each-slide-img"
                onMouseEnter={() => handleImageHoverAndClick(image)}
                onClick={() => handleImageHoverAndClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="product-specs">
          <div>Brand: {EachProductData?.brand}</div>
          <div>Category: {EachProductData?.category}</div>
          <p>
            Stock:{" "}
            <span
              className={
                EachProductData?.stock <= 10 ? "out-of-stock" : "in-stock"
              }
            >
              {EachProductData?.stock}
            </span>{" "}
            left
          </p>
          <h2>{EachProductData?.title.toUpperCase()}</h2>
          <div>
            Rating: {EachProductData?.rating} need to fix this, turn to star
          </div>
          <div>
            <div>Description:</div>
            <p>{EachProductData?.description}</p>
          </div>
          <div className="quantity-container">
            <div>Quantity</div>
            <div className="cart-count-container">
              <button className="quantity-minus" onClick={minusQuantity}>
                -
              </button>
              <div className="cart-quantity">{cartQuantity}</div>
              <button className="quantity-add" onClick={addQuantity}>
                +
              </button>
            </div>
            <div className="each-price">
              ${cartQuantity * EachProductData?.price}
            </div>
          </div>
          <div className="cartbuy-btn">
            <button className="buynow-btn">Buy Now</button>
            <button className="addtocart-btn" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
