import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
function HomePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default HomePage;
