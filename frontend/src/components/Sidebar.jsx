import React from "react";
import "../App.css";
import Articles from "./Articles_home";

function Sidebar() {
  return (
    <div id="scrollbox">
      <div id="sidebar-title">
        <h1>NASA Events</h1>
        {new Date().toLocaleDateString()}
        <div id="scrollbox-inner">
          <Articles />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
