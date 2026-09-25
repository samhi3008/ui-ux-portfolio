import "./MainLayout.css";
import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";
import { Outlet, useLocation } from "react-router";

export default function MainLayout() {
  const { pathname } = useLocation();
  const showFooter = pathname !== "/contact";
  return (
    <>
      <Header />
      <Outlet />
      {showFooter && <Footer />}
    </>
  );
}
