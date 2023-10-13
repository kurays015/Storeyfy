import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { StarRatings } from "../../utils/StarRatings";
import { fetchEachProductById } from "../../utils/FetchProductsDetails";
import { productPerCategory } from "../../utils/FetchProductsDetails";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { useCart } from "../../Context/CartContext";

function Products() {
  const { id } = useParams();
  const { data } = fetchEachProductById(id);
  const { data: relatedProducts } = productPerCategory(data?.category);
  const { handleImageHoverAndClick, currentImage, setCurrentImage, addToCart } =
    useCart();

  useEffect(() => {
    if (data) {
      setCurrentImage(data.thumbnail);
    }
  }, [data]);

  const products = relatedProducts?.products || [];
  const filtered = products.filter(item => item.id !== data?.id);
  return (
    <>
      <div className="each-productContainer">
        <div style={{ display: "flex" }}>
          <div className="images-container">
            <div className="main-img-container">
              <img src={currentImage} alt={data?.title} className="main-img" />
            </div>
            <div className="swiper-container">
              {data?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={data?.title}
                  className="each-slide-img"
                  onMouseEnter={() => handleImageHoverAndClick(image)}
                />
              ))}
            </div>
          </div>
          <div className="product-specs">
            <div>Brand: {data?.brand}</div>
            <div>
              Category:{" "}
              {data?.category
                .replace("-", " ")
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </div>
            <p>
              Stock:{" "}
              <span className={data?.stock <= 10 ? "out-of-stock" : "in-stock"}>
                {data?.stock}
              </span>{" "}
              left
            </p>
            <h2 className="prod-title">{data?.title.toUpperCase()}</h2>
            <div className="stars-rating-container">
              Rating: {StarRatings(data?.rating)}
            </div>
            <div>
              <div>Description:</div>
              <p>{data?.description}</p>
            </div>
            <div className="prod-price">
              Price: <span>{CurrencyFormatter(data?.price)}</span>
            </div>
            <div className="cartbuy-btn">
              <button className="buynow-btn">Buy Now</button>
              <button className="addtocart-btn" onClick={() => addToCart(data)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <RelatedProducts filtered={filtered} />
      </div>
    </>
  );
}

export default Products;
{
  /* <RelatedProducts filtered={filtered} /> */
}
