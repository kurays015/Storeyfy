import { Link } from "react-router-dom";
import { CategoryTitle } from "../../utils/CategoryTitle";
import { useCategory } from "../../Context/CategoryContext";

function Categories() {
  const { newCopyOfCategories } = useCategory();

  return (
    <div className="category-container">
      {newCopyOfCategories.sort().map((category, index) => (
        <li key={index}>
          <Link to={`${category}`}>{CategoryTitle(category)}</Link>
        </li>
      ))}
    </div>
  );
}

export default Categories;
