import { useEffect, useState } from "react";
import { allProducts } from "../../FetchProductsDetails";
import { Link } from "react-router-dom";
function OurProduct() {
  // Define hooks unconditionally at the top of the component
  const [productData, setProductData] = useState([]);
  const { data } = allProducts();
  const isFilled = data ? [...data.products] : [];

  // Function to shuffle an array randomly
  const getRandomProduct = products => {
    const randomProducts = products.sort(() => Math.random() - 0.5).slice(0, 8);
    setProductData(randomProducts);
  };

  useEffect(() => {
    getRandomProduct(isFilled);
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
                  <div className="price-rating">
                    <p>${price}</p>
                    <h4>Rating: {rating}</h4>
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
