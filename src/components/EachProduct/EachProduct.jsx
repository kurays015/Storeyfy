import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataFetching } from "../../FetchProductsDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import imgPlaceholder from "/images/placeholder.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Products() {
  const { id } = useParams();
  const fetchEachProductById = () => {
    return useDataFetching(
      `eachProduct-${id}`,
      `https://dummyjson.com/products/${id}`
    );
  };
  const { data } = fetchEachProductById();

  //set the default/main img to placeholder
  const [currentImage, setCurrentImage] = useState(imgPlaceholder);

  useEffect(() => {
    if (data) {
      setCurrentImage(data.thumbnail);
    }
  }, [data]);

  function handleImageHoverAndClick(img) {
    setCurrentImage(img);
  }

  return (
    <div className="each-productContainer">
      <div>
        <div className="main-img-container">
          <img src={currentImage} alt={data?.title} className="main-img" />
        </div>
        <div className="swiper-container">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="swiper"
          >
            {data?.images.map((image, index) => (
              <SwiperSlide className="each-slide-container">
                <img
                  key={index}
                  src={image}
                  alt={data?.title}
                  className="each-slide-img"
                  onMouseEnter={() => handleImageHoverAndClick(image)}
                  onClick={() => handleImageHoverAndClick(image)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="product-specs">
        <div>Brand: {data?.brand}</div>
        <div>
          Stock:
          <span className={data?.stock <= 10 ? "out-of-stock" : "in-stock"}>
            {data?.stock <= 10 ? `Only ${data?.stock} stock left` : ""}
          </span>
        </div>
        <h1>{data?.title}</h1>
        <div>Rating: {data?.rating}</div>
        <div>
          <div>Description:</div>
          <p>{data?.description}</p>
        </div>
        <div className="each-price">${data?.price}</div>
        <div className="cart-and-buy">
          <div className="cart-count">
            <button>-</button>
            <div>1</div>
            <button>+</button>
          </div>
          <button>Buy Now</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
