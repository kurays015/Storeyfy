import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <h1>Storeyfy</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="header-cart-save-container">
        <h3>Saved Products</h3>
        <h3>Add to cart</h3>
      </div>
    </header>
  );
}

export default Navigation;
