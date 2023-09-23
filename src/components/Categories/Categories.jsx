import { Link } from "react-router-dom";

function Categories({ originalCategories }) {
  return (
    <div className="category-container">
      {originalCategories.sort().map((category, index) => (
        <li key={index}>
          <Link to={`/${category}`}>
            {category
              .replace("-", " ")
              .split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default Categories;
