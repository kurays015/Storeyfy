import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//react query
import { QueryClientProvider, QueryClient } from "react-query";
//context
import { WishlistProvider } from "./Context/WishlistContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";

//components
import "./components/HeaderNav/header.css";
import "./components/Carousel/carousel.css";
import "./components/ProductByCategory/productbycategory.css";
import "./components/Categories/categories.css";
import "./components/ProductByCategory/productbycategory.css";
import "./components/Layout/layout.css";
import "./components/EachProduct/product.css";
import "./components/FlashSale/flashsale.css";
import "./components/EcomBannerImg/ecom-banner.css";
import "./components/OurProduct/ourproduct.css";
import "./components/CartContent/cartcontent.css";
import "./components/Footer/footer.css";
import "./components/RelatedProducts/relatedproducts.css";
import "./components/WishListContent/wishlist.css";
import "./components/GoodService/goodservice.css";

//pages css
import "./index.css";
import "./pages/Home/home.css";
import "./pages/About/about.css";
import "./pages/Contact/contact.css";
import "./pages/AllProducts/allproducts.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
