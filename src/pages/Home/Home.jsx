import { Link } from "react-router-dom";
//components
import Carousel from "../../components/Carousel/Carousel";
import FlashSale from "../../components/FlashSale/FlashSale";
import EcomBanner from "../../components/EcomBannerImg/EcomBannerImg";
import OurProduct from "../../components/OurProduct/OurProduct";

//imgs
import img1 from "/images/shop1.jpg";
import img2 from "/images/shop2.jpg";
import img3 from "/images/shop3.jpg";
//react icons
import { BsArrowRight } from "react-icons/bs";

function Home() {
  return (
    <div className="main">
      <div className="banner">
        <div className="firstbanner-img">
          <div className="shopnow-btn-container">
            <Link to="category/all-products" className="shopnow-btn">
              Shop now!
            </Link>
            <BsArrowRight className="arrow" />
          </div>
          <div className="iphone-img-container">
            <img src={img3} />
          </div>
        </div>

        <div className="mobile-none">
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
        </div>
        <Carousel />
      </div>
      <FlashSale />
      <EcomBanner />
      <OurProduct />
    </div>
  );
}

export default Home;
