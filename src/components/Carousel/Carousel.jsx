import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import slide1 from "/images/pexels-max-fischer-5872302.jpg";
import slide2 from "/images/pexels-karolina-grabowska-5625045.jpg";
import slide3 from "/images/Time for Ecommerce Entrepreneurs.jpeg";

const images = [{ image: slide1 }, { image: slide2 }, { image: slide3 }];

function Carousel() {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      loop={true}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {images.map(({ image }) => (
        <SwiperSlide key={image}>
          <img className="swiper-img" alt="hero-img" src={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
