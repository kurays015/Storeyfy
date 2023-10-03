import { Link, Outlet } from "react-router-dom";
import Categories from "../Categories/Categories";
import AllProducts from "../AllProducts/AllProducts";
function CategoryLayout({ category, originalCategories }) {
  return (
    <div className="product-in-category">
      <Categories originalCategories={originalCategories} />
      <Outlet />
    </div>
  );
}

export default CategoryLayout;
