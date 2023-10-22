import React, { useState, useRef } from "react";
import { allProducts } from "../../utils/useFetchData";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { Link } from "react-router-dom";
import { StarRatings } from "../../utils/StarRatings";
import { useCart } from "../../Context/CartContext";
//react icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useWishList } from "../../Context/WishlistContext";

function AllProducts({ category }) {
  const [searchMessage, setSearchMessage] = useState(false);
  const { data } = allProducts();
  const [renderedProducts, setRenderedProducts] = useState([]);
  const inputRef = useRef();
  const { addToCart } = useCart();
  const { addToWishList } = useWishList();
  function handleSubmit(e) {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    const filteredSearch = data?.products.filter(product => {
      if (product.title.toLowerCase().includes(inputValue.toLowerCase())) {
        return product;
      }
    });
    if (filteredSearch.length) {
      setRenderedProducts(filteredSearch);
      setSearchMessage(false);
    } else {
      setSearchMessage(true);
    }
    inputRef.current.value = "";
  }

  const currentData = renderedProducts.length
    ? renderedProducts
    : data?.products || [];

  return (
    <div className="all-products-parentContainer">
      <h1 className="category-name">
        {category === "smartphones" ? "All Products" : ""}
      </h1>
      <form onSubmit={handleSubmit} className="search">
        <label>
          <HiMagnifyingGlass />
        </label>
        <input ref={inputRef} type="search" placeholder="search product" />
      </form>
      <div className="product-container">
        {searchMessage ? (
          <h3 style={{ color: "#808080" }}>No product found...</h3>
        ) : (
          currentData.map(
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
                <div className="product-card">
                  <div className="discount">
                    {Math.round(discountPercentage)}% OFF!
                  </div>
                  <Link to={`${id}`}>
                    <img src={thumbnail} className="product-img" />
                  </Link>
                  <div className="product-details">
                    <Link to={`${id}`}>
                      <div>
                        <h2 className="product-title">{title}</h2>
                      </div>
                    </Link>
                    <div className="rating">{StarRatings(rating)}</div>
                    <div className="price">
                      <div>{CurrencyFormatter(price)}</div>
                      <del>
                        {CurrencyFormatter(
                          price / (1 - Math.round(discountPercentage) / 100)
                        )}
                      </del>
                    </div>
                  </div>
                  <div className="shortcut-icons">
                    <div>
                      <FaCartPlus
                        title="add to cart"
                        className="addToCart-Btn"
                        onClick={() =>
                          addToCart({ id, title, thumbnail, price })
                        }
                      />
                    </div>
                    <div>
                      <AiOutlineHeart
                        title="add to wishlist"
                        className="addToWishlist-Btn"
                        onClick={() =>
                          addToWishList({
                            id,
                            title,
                            thumbnail,
                            price,
                            rating,
                            discountPercentage,
                            category,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )
          )
        )}
      </div>
    </div>
  );
}

export default AllProducts;
