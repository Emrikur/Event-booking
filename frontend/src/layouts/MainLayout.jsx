import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

function MainLayout() {
    const { pathname } = useLocation();
    useEffect(() => {window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="layout">
      {/* <Header /> */}
      <Navbar />
      <main className="layout__content">
        <Outlet />
      </main>
       <Footer />
    </div>
  );
}

export default MainLayout;
