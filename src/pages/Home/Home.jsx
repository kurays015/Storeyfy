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
import { allProducts } from "../../FetchProductsDetails";
import { BsArrowRight } from "react-icons/bs";

function Home() {
  const { data } = allProducts();
  return (
    <div className="main">
      <div className="banner">
        <div className="show-now">
          <div className="hero-main">
            <div className="firstImg-container">
              <div className="hero-overlay"></div>
              <div className="shopnow-btn-container">
                <Link to="category/all-products" className="shopnow-btn">
                  Shop now!
                </Link>
                <BsArrowRight className="arrow" />
              </div>
              <img src={img3} className="hero-img3" />
            </div>
            <div className="secondImg-container">
              <h3>Shop anywhere online!</h3>
              <div className="each-container">
                <div className="overlay"></div>
                <img src={img1} className="hero-img1" />
              </div>
              <div className="each-container">
                <div className="overlay2"></div>
                <img src={img2} className="hero-img2" />
              </div>
            </div>
          </div>
        </div>
        <Carousel />
      </div>
      <FlashSale allproducts={data?.products} />
      <EcomBanner />
      <OurProduct />
    </div>
  );
}

export default Home;
