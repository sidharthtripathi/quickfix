import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <h1>Header</h1>
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{ width: "10vw", border: "2px solid black", height: "90vh" }}
        >
          <div style={{ border: "2px solid black", padding: "1rem" }}>
            <NavLink to="/chat">Chat</NavLink>
          </div>
          <div style={{ border: "2px solid black", padding: "1rem" }}>
            <NavLink to="/note">Notes</NavLink>
          </div>
        </div>
        <div style={{ border: "3px solid red", width: "88vw" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
