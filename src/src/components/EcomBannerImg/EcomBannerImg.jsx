import { Link } from "react-router-dom";
import banner from "/images/ecom-banner.jpg";
function EcomBannerImg() {
  return (
    <div className="ecom-banner-container">
      <img src={banner} alt="banner" className="ecom-banner" />
      <Link to="category/all-products" className="banner-btn">
        Buy now!
      </Link>
    </div>
  );
}

export default EcomBannerImg;
