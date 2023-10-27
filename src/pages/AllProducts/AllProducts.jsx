import React, { useState, useRef } from "react";
import { allProducts } from "../../utils/useFetchData";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
import { Link } from "react-router-dom";
import { StarRatings } from "../../utils/StarRatings";
import { useCart } from "../../Context/CartContext";
import { useWishList } from "../../Context/WishlistContext";

//react icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";

function AllProducts({ category }) {
  const totalPages = 100;
  const dataPerPage = 20;
  const [searchMessage, setSearchMessage] = useState(false);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const { data, isLoading } = allProducts(dataPerPage, skip);
  const [renderedProducts, setRenderedProducts] = useState([]);
  const inputRef = useRef();
  const { addToCart } = useCart();
  const { addToWishList, removeFromWishlist, isInWishList } = useWishList();

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

  const prev = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
    setSkip(prev => prev - 20);
    window.scrollTo(0, 0);
  };
  const next = () => {
    setPage(prevPage => prevPage + 1);
    setSkip(prev => prev + 20);
    window.scrollTo(0, 0);
  };
  const goToFirstPage = () => {
    setPage(1);
    setSkip(0);
    window.scrollTo(0, 0);
  };
  const goToLastPage = () => {
    const lastPage = totalPages / dataPerPage;
    const skipForLastPage = (lastPage - 1) * dataPerPage;
    setPage(lastPage);
    setSkip(skipForLastPage);
    window.scrollTo(0, 0);
  };

  const currentData = renderedProducts.length
    ? renderedProducts
    : data?.products || [];

  if (isLoading) {
    return <h1 className="loading">Loading data...</h1>;
  }
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
                      {isInWishList(id) ? (
                        <AiFillHeart
                          onClick={() => removeFromWishlist(id)}
                          className="add-removeToWishlist-Btn"
                        />
                      ) : (
                        <AiOutlineHeart
                          onClick={() =>
                            addToWishList({
                              title,
                              price,
                              rating,
                              discountPercentage,
                              thumbnail,
                              id,
                              category,
                            })
                          }
                          className="add-removeToWishlist-Btn"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )
          )
        )}
      </div>
      <div className="pagination">
        <button
          className="first-page"
          disabled={page === 1}
          onClick={goToFirstPage}
        >
          <BiFirstPage className="first-page-icon" />
        </button>
        <button className="first-pagebtn" disabled={page === 1} onClick={prev}>
          prev
        </button>
        <span>{page}</span>
        <button
          className="last-pagebtn"
          disabled={page >= totalPages / dataPerPage}
          onClick={next}
        >
          next
        </button>
        <button
          className="last-page"
          onClick={goToLastPage}
          disabled={page >= totalPages / dataPerPage}
        >
          <BiLastPage className="last-page-icon" />
        </button>
      </div>
    </div>
  );
}

export default AllProducts;
