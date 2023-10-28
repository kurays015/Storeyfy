import { Link } from "react-router-dom";
import { BsCart2, BsHeart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCart } from "../../Context/CartContext";
import { useWishList } from "../../Context/WishlistContext";
import { useBurgerMenu } from "../../Context/BurgerMenuContext";
import storeyfyLogo from "/images/Storeyfy-logo.png";
function Navigation() {
  const { setShowCart, cartItems } = useCart();
  const { wishListItems } = useWishList();
  const { setShowBurgerNavMenu } = useBurgerMenu();
  return (
    <header>
      <Link to="/">
        <img src={storeyfyLogo} alt="store-logo" className="store-logo" />
        {/* <h1>Storeyfy</h1> */}
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/all-products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
      <div className="header-cart-save-container">
        <Link to="/wishlist">
          <h3 className="wishlist-icon">
            {wishListItems.length ? <div>{wishListItems.length}</div> : ""}
            <BsHeart className="addto-wishlist" />
          </h3>
        </Link>
        <h3 className="cart-icon">
          {cartItems.length ? <div>{cartItems.length}</div> : ""}
          <BsCart2 className="addto-cart" onClick={() => setShowCart(true)} />
        </h3>
        <div>
          <RxHamburgerMenu
            onClick={() => setShowBurgerNavMenu(true)}
            className="burger-menu-icon"
          />
        </div>
      </div>
    </header>
  );
}

export default Navigation;
