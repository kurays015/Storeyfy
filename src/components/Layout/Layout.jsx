import Navigation from "../HeaderNav/Navigation";
import CartContent from "../../components/CartContent/CartContent";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <CartContent />
      <Navigation />
      <Outlet />
    </>
  );
}

export default Layout;
