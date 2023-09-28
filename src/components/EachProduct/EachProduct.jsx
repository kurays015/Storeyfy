import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataFetching } from "../../FetchProductsDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

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
  //set the default/main img is thumbnail
  const [currentImage, setCurrentImage] = useState(data?.thumbnail);

  function handleImageHoverAndClick(img) {
    setCurrentImage(img);
  }

  return (
    <div className="each-productContainer">
      <div>
        <div className="main-img-container">
          <img src={currentImage} alt={data?.title} className="product-thumb" />
        </div>
        <div className="all-img-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
          >
            {data?.images.map((image, index) => (
              <SwiperSlide key={index} className="each-img">
                <img
                  src={image}
                  alt={data?.title}
                  className="allproduct-img"
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
        <div>Stock: {data?.stock}</div>
        <h1>{data?.title}</h1>
        <div>{data?.rating}</div>
        <p>{data?.description}</p>
        <div>${data?.price}</div>
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
