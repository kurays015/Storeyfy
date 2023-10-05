import { useEffect, useState } from "react";
import { allProducts } from "../../FetchProductsDetails";
import { Link } from "react-router-dom";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { StarRatings } from "../../utils/StarRatings";
function OurProduct() {
  const [productData, setProductData] = useState([]);
  const { data } = allProducts();

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
            <Link to={`category/${category}/${id}`}>
              <div key={id} className="explore-card">
                <div className="img-container">
                  <img src={thumbnail} alt={title} className="thumbnail" />
                </div>
                <div className="details">
                  <h4>{title}</h4>
                  <div>
                    <h4>{StarRatings(rating)}</h4>
                  </div>
                  <div className="price-rating">
                    <div>{CurrencyFormatter(price)}</div>
                    <del>
                      {CurrencyFormatter(
                        (price * Math.round(discountPercentage)) / 100 + price
                      )}
                    </del>
                  </div>
                  <div className="discount">
                    {Math.round(discountPercentage)}% OFF!
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default OurProduct;
