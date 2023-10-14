import { RiTwitterXLine } from "react-icons/ri";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoGooglePlus,
  BiLogoYoutube,
} from "react-icons/bi";
import { useLocation } from "react-router-dom";

function Footer({ newCopyOfCategories }) {
  const location = useLocation();
  const isEachCategoryRoute = newCopyOfCategories
    ?.filter(category => category !== "all-products")
    .some(category => location.pathname === `/category/${category}`);
  const navRoute =
    location.pathname === "/about" ||
    location.pathname === "/contact" ||
    location.pathname === "/signup" ||
    location.pathname === "/wishlist";

  return (
    <div
      className={`${isEachCategoryRoute ? "fixed" : ""} ${
        navRoute ? "absolute" : ""
      }`}
    >
      <footer>
        <div className="footer-subscribe">
          <h1>Storeyfy</h1>
          <input type="email" placeholder="your@email.com" />
          <button>Subscribe</button>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <div>
            <ul>
              <li>Phone: +1 (0) 000 0000 001</li>
              <li>Email: yourmail@example.com</li>
              <li>Address: 1234 Street Name City, AA 99999</li>
            </ul>
          </div>
          <div className="footer-socials">
            <ul>
              <li>
                <a href="#">
                  <BiLogoFacebookCircle className="footer-icons" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiLogoInstagram className="footer-icons" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiLogoGooglePlus className="footer-icons" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiLogoYoutube className="footer-icons" />
                </a>
              </li>
              <li>
                <a href="#">
                  <RiTwitterXLine className="footer-icons" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-news">
          <h3>Recent News</h3>
          <div>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Get in touch</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <div>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <h5>Copyright © 2023. All rights are reserved</h5>
      </div>
    </div>
  );
}

export default Footer;
