import { RiTwitterXLine } from "react-icons/ri";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useCategory } from "../../Context/CategoryContext";

function Footer() {
  const location = useLocation();
  const { newCopyOfCategories } = useCategory();

  const isEachCategoryRoute = newCopyOfCategories
    .filter(category => category !== "all-products")
    .some(category => location.pathname === `/category/${category}`);
  const navRoute =
    location.pathname === "/about" || location.pathname === "/signup";

  const contactPage = location.pathname === "/contact";

  return (
    <footer
      className={`myFooter ${isEachCategoryRoute ? "fixed" : ""} ${
        navRoute ? "navFixed" : ""
      } ${contactPage ? "contactFooter" : ""}`}
    >
      <div>
        <div className="socials-container">
          <div>
            <BiLogoFacebookCircle className="socials-icon" />
          </div>
          <div>
            <BiLogoYoutube className="socials-icon" />
          </div>
          <div>
            <BiLogoInstagram className="socials-icon" />
          </div>
          <div>
            <RiTwitterXLine className="socials-icon" />
          </div>
        </div>
        <small>All Rights Reserved. © 2024 Storeyfy</small>
      </div>
    </footer>
  );
}

export default Footer;
