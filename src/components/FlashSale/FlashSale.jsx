import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { StarRatings } from "../../utils/StarRatings";
import { useCart } from "../../Context/CartContext";
import { randomProducts } from "../../utils/useFetchData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
//react icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useWishList } from "../../Context/WishlistContext";

function FlashSale() {
  const { addToCart } = useCart();
  const { addToWishList, isInWishList, removeFromWishlist } = useWishList();
  const { data } = randomProducts();

  const fifteenPercentAboveProduct = data?.products.map(
    ({ discountPercentage, id, title, thumbnail, price, rating, category }) => {
      if (Math.round(discountPercentage) > 15) {
        return (
          <SwiperSlide key={id} className="flashsale-card">
            <div className="flashsale-discount">
              {Math.round(discountPercentage)}% OFF!
            </div>
            <Link to={`category/${category}/${id}`}>
              <div className="flashsale-img-container">
                <img src={thumbnail} className="flashsale-img" />
              </div>
            </Link>
            <div className="flashsale-details">
              <Link to={`category/${category}/${id}`}>
                <div>
                  <h2 className="flashsale-title">{title}</h2>
                </div>
              </Link>
              <div className="flashsale-rating">{StarRatings(rating)}</div>
              <div className="flashsale-price">
                <div>{CurrencyFormatter(price)}</div>
                <del>
                  {CurrencyFormatter(
                    price / (1 - Math.round(discountPercentage) / 100)
                  )}
                </del>
              </div>
              <div className="shortcut-icons">
                <div>
                  <FaCartPlus
                    title="add to cart"
                    className="addToCart-Btn"
                    onClick={() => addToCart({ id, title, thumbnail, price })}
                  />
                </div>
                <div>
                  {isInWishList(id) ? (
                    <AiFillHeart
                      onClick={() => removeFromWishlist(id)}
                      className="add-removeToWishlist-Btn"
                    />
                  ) : (
                    <AiOutlineHeart
                      onClick={() =>
                        addToWishList({
                          title,
                          price,
                          rating,
                          discountPercentage,
                          thumbnail,
                          id,
                          category,
                        })
                      }
                      className="add-removeToWishlist-Btn"
                    />
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      }
    }
  );

  return (
    <div className="flashsale-container">
      <div className="topic-flashsales">
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
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 30, // Change to 2 slides per view at 400px or less
          },
          768: {
            slidesPerView: 5,
          },
        }}
      >
        {fifteenPercentAboveProduct}
      </Swiper>
      <div className="view-all-products">
        <Link to="category/all-products">View All Products</Link>
      </div>
    </div>
  );
}

export default FlashSale;
