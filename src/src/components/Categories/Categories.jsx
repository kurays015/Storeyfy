import { Link } from "react-router-dom";
import { CategoryTitle } from "../../utils/CategoryTitle";

function Categories({ originalCategories }) {
  return (
    <div className="category-container">
      {originalCategories.sort().map((category, index) => (
        <li key={index}>
          <Link to={`${category}`}>{CategoryTitle(category)}</Link>
        </li>
      ))}
    </div>
  );
}

export default Categories;
