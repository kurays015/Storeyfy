import { useNavigate } from "react-router-dom";
import { useCategory } from "../../Context/CategoryContext";
import { CategoryTitle } from "../../utils/CategoryTitle";

function MobileCategory() {
  const { newCopyOfCategories } = useCategory();
  const navigate = useNavigate();

  const changeRoute = e => {
    const { value: category } = e.target;
    if (category) {
      navigate(`/category/${category}`);
    }
  };

  return (
    <div className="mobile-categories">
      <label htmlFor="category-select">Categories:</label>
      <select name="category" id="category-select" onChange={changeRoute}>
        <option value="">Choose a category</option>
        {newCopyOfCategories.sort().map(category => (
          <option key={category} value={category}>
            {CategoryTitle(category)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MobileCategory;
