import { Outlet } from "react-router-dom";
import Categories from "../Categories/Categories";
import MobileCategories from "../MobileCategories/MobileCategories";
function CategoryLayout() {
  return (
    <>
      <div className="product-in-category">
        <Categories />
        <MobileCategories />
        <Outlet />
      </div>
    </>
  );
}

export default CategoryLayout;
