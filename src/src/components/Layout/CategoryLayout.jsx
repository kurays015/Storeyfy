import { Outlet } from "react-router-dom";
import Categories from "../Categories/Categories";
function CategoryLayout({ originalCategories }) {
  return (
    <>
      <div className="product-in-category">
        <Categories originalCategories={originalCategories} />
        <Outlet />
      </div>
    </>
  );
}

export default CategoryLayout;
