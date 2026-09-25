import "./MainLayout.css";
import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

export default function MainLayout() {
  const { pathname } = useLocation();
  const showFooter = pathname !== "/contact";

  useEffect(() => {
    document.body.classList.add("is-preload");

    const preloadTimer = window.setTimeout(() => {
      document.body.classList.remove("is-preload");
    }, 150);

    return () => window.clearTimeout(preloadTimer);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      {showFooter && <Footer />}
    </>
  );
}
