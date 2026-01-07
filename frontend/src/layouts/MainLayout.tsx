import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="layout">
      {/* <Header /> */}
      <main className="layout__content">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default MainLayout;
