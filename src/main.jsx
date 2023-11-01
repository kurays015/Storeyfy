import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//react query
import { QueryClientProvider, QueryClient } from "react-query";
//context
import { WishlistProvider } from "./Context/WishlistContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { CategoryProvider } from "./Context/CategoryContext.jsx";
import { BurgerMenuProvider } from "./Context/BurgerMenuContext.jsx";

//components
import "./components/HeaderNav/header.css";
import "./components/Carousel/carousel.css";
import "./components/ProductByCategory/productbycategory.css";
import "./components/Categories/categories.css";
import "./components/ProductByCategory/productbycategory.css";
import "./components/Layout/layout.css";
import "./components/EachProduct/eachproduct.css";
import "./components/FlashSale/flashsale.css";
import "./components/EcomBannerImg/ecom-banner.css";
import "./components/OurProduct/ourproduct.css";
import "./components/CartContent/cartcontent.css";
import "./components/Footer/footer.css";
import "./components/RelatedProducts/relatedproducts.css";
import "./components/WishListContent/wishlist.css";
import "./components/GoodService/goodservice.css";
import "./components/BurgerMenu/burger-menu.css";
import "./components/MobileCategories/mobilecategories.css";

//pages css
import "./index.css";
import "./pages/Home/home.css";
import "./pages/About/about.css";
import "./pages/Contact/contact.css";
import "./pages/AllProducts/allproducts.css";
import "./pages/Signup/signup.css";

//css file for responsive
import "./components/CartContent/cart-content-responsive.css";
import "./components/EachProduct/each-product-responsive.css";
import "./components/EcomBannerImg/ecom-banner-responsive.css";
import "./components/FlashSale/flashsale-responsive.css";
import "./components/Footer/footer-responsive.css";
import "./components/GoodService/goodservice-responsive.css";
import "./components/HeaderNav/header-responsive.css";
import "./components/Layout/layout-responsive.css";
import "./components/MobileCategories/mobile-categories-responsive.css";
import "./components/OurProduct/ourproduct-responsive.css";
import "./components/ProductByCategory/productbycategory-responsive.css";
import "./components/RelatedProducts/relatedproducts-responsive.css";
import "./components/WishListContent/wishlist-content-responsive.css";
import "./pages/About/about-responsive.css";
import "./pages/AllProducts/allproducts-responsive.css";
import "./pages/Contact/contact-responsive.css";
import "./pages/Home/home-responsive.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <CategoryProvider>
          <WishlistProvider>
            <BurgerMenuProvider>
              <App />
            </BurgerMenuProvider>
          </WishlistProvider>
        </CategoryProvider>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
