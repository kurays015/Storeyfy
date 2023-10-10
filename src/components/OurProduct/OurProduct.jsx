import React, { useEffect, useState } from "react";
import { allProducts } from "../../utils/FetchProductsDetails";
import { Link } from "react-router-dom";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { StarRatings } from "../../utils/StarRatings";
import { useCart } from "../../Context/CartContext";
//react icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";

function OurProduct() {
  const [productData, setProductData] = useState([]);
  const { data } = allProducts();

  const { addToCart } = useCart();

  useEffect(() => {
    if (data) {
      const randomProducts = [...data.products]
        .sort(() => Math.random() - 0.5)
        .slice(0, 8);
      setProductData(randomProducts);
    }
  }, [data]);

  return (
    <div className="our-product-container">
      <div className="topic">
        <div className="blank"></div>
        <h5>Our Products</h5>
      </div>
      <div className="flashsale-header">
        <h1>Explore Our Products</h1>
      </div>
      <div className="explore-productContainer">
        {productData.map(
          ({
            title,
            price,
            rating,
            discountPercentage,
            thumbnail,
            id,
            category,
          }) => (
            <React.Fragment key={id}>
              <div className="explore-card">
                <Link to={`category/${category}/${id}`}>
                  <div className="img-container">
                    <img src={thumbnail} alt={title} className="thumbnail" />
                  </div>
                </Link>

                <div className="details">
                  <Link to={`category/${category}/${id}`}>
                    <h4>{title}</h4>
                  </Link>
                  <div>
                    <h4>{StarRatings(rating)}</h4>
                  </div>
                  <div className="price-rating">
                    <div>{CurrencyFormatter(price)}</div>
                    <del>
                      {CurrencyFormatter(
                        price / (1 - Math.round(discountPercentage) / 100)
                      )}
                    </del>
                  </div>
                  <div className="discount">
                    {Math.round(discountPercentage)}% OFF!
                  </div>
                </div>
                <div className="shortcut-icons">
                  <div>
                    <FaCartPlus
                      className="addToCart-Btn"
                      onClick={() => addToCart({ id, title, thumbnail, price })}
                    />
                  </div>
                  <div>
                    <AiOutlineHeart className="addToWishlist-Btn" />
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
}

export default OurProduct;
