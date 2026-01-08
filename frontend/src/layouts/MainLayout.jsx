import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="layout">
      {/* <Header /> */}
      <Navbar />
      <main className="layout__content">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default MainLayout;
