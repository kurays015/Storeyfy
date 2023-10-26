import { Outlet } from "react-router-dom";
import Categories from "../Categories/Categories";
function CategoryLayout() {
  return (
    <>
      <div className="product-in-category">
        <Categories />
        <Outlet />
      </div>
    </>
  );
}

export default CategoryLayout;
