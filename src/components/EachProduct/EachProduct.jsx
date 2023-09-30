import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useDataFetching } from "../../FetchProductsDetails";
import imgPlaceholder from "/images/placeholder.jpg";
import { CartContext } from "../../Context/MyContext";
function Products() {
  const { id } = useParams();
  const { setCartItems } = useContext(CartContext);
  const { cartQuantity, setCartQuantity } = useContext(CartContext);

  //set the default/main img to placeholder
  const [currentImage, setCurrentImage] = useState(imgPlaceholder);

  const fetchEachProductById = () => {
    return useDataFetching(
      `eachProduct-${id}`,
      `https://dummyjson.com/products/${id}`
    );
  };

  const { data } = fetchEachProductById();

  useEffect(() => {
    setCurrentImage(data?.thumbnail);
  }, [data]);

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
    if (data) {
      const productInTheCart = {
        title: data.title,
        thumbnail: data.thumbnail,
        price: data.price,
      };
      setCartItems(prevItems => [...prevItems, productInTheCart]);
    }
  };

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
            <div className="each-price">${cartQuantity * data?.price}</div>
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
