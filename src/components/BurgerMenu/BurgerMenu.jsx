import { Link } from "react-router-dom";
import { useBurgerMenu } from "../../Context/BurgerMenuContext";
import { HiXMark } from "react-icons/hi2";

function BurgerMenu() {
  const { showBurgerNavMenu, handleBugerMenuToggle } = useBurgerMenu();

  return (
    <nav className={`burger-nav ${showBurgerNavMenu ? "show-menu" : ""}`}>
      <button onClick={handleBugerMenuToggle}>
        <HiXMark />
      </button>
      <ul>
        <li>
          <Link to="/" onClick={handleBugerMenuToggle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/category/all-products" onClick={handleBugerMenuToggle}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleBugerMenuToggle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleBugerMenuToggle}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/signup" onClick={handleBugerMenuToggle}>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
