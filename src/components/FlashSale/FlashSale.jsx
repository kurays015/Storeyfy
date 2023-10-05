import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { StarRatings } from "../../utils/StarRatings";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function FlashSale({ allproducts }) {
  const fifteenPercentAboveProduct = allproducts?.map(
    ({ discountPercentage, id, title, thumbnail, price, rating, category }) => {
      if (Math.round(discountPercentage) > 15) {
        return (
          <SwiperSlide key={id} className="flashsale-card">
            <Link to={`category/${category}/${id}`}>
              <div className="flashsale-discount">
                {Math.round(discountPercentage)}% OFF!
              </div>
              <div className="flashsale-img-container">
                <img src={thumbnail} className="flashsale-img" />
              </div>
              <div className="flashsale-details">
                <div>
                  <h2 className="flashsale-title">{title}</h2>
                </div>
                <div className="flashsale-rating">{StarRatings(rating)}</div>
                <div className="flashsale-price">
                  <div>{CurrencyFormatter(price)}</div>
                  <del>
                    {CurrencyFormatter(
                      (price * Math.round(discountPercentage)) / 100 + price
                    )}
                  </del>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      }
    }
  );

  //{fifteenPercentAboveProduct}
  return (
    <div className="flashsale-container">
      <div className="topic">
        <div className="blank"></div>
        <h5>Today's</h5>
      </div>
      <div className="flashsale-header">
        <h1>Flash Sales</h1>
        <div className="prev-next-container">
          <div className="custom-prev-button">
            <FaArrowLeftLong />
          </div>
          <div className="custom-next-button">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
      <Swiper
        modules={[FreeMode, Navigation]}
        slidesPerView={5}
        spaceBetween={50}
        freeMode={true}
        navigation={{
          prevEl: ".custom-prev-button", // Custom class for the previous button
          nextEl: ".custom-next-button", // Custom class for the next button
        }}
        className="mySwiper2"
      >
        {fifteenPercentAboveProduct}
      </Swiper>
      <div className="view-all-products">
        <Link to="category/all-products">
          <h2>View All Products</h2>
        </Link>
      </div>
    </div>
  );
}

export default FlashSale;
