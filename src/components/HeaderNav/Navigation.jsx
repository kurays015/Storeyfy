import { Link } from "react-router-dom";
import { BsCart2, BsHeart } from "react-icons/bs";

function Navigation() {
  return (
    <header>
      <Link to="/">
        <h1>Storeyfy</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="category">Categories</Link>
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
        <Link to="/Wishlist">
          <h3>
            <BsHeart />
          </h3>
        </Link>
        <Link to="/cart">
          <h3>
            <BsCart2 />
          </h3>
        </Link>
      </div>
    </header>
  );
}

export default Navigation;
