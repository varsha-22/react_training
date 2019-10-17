import React from "react";
import NavBar from "./components/Navbar/NavBar";

const DashboardLayout = ({ children, ...rest }) => {
  return (
    <div className="page page-dashboard">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">{children}</div>
    </div>
  );
};

export default DashboardLayout;
