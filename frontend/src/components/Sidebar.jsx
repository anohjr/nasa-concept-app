/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "../App.css";
import Articles from "./Articles_home";

function Sidebar(props) {
  return (
    <div
      id="scrollbox"
      className={
        props.displayGallery || props.displayImgotd
          ? "display-off"
          : "display-on"
      }
      style={
        props.displayGallery || props.displayImgotd
          ? { transitionDelay: "0ms" }
          : { transitionDelay: "1s" }
      }
    >
      <div id="sidebar-title">
        <h1>NASA Events</h1>
        <p id="nasaEvent_date">{new Date().toLocaleDateString()}</p>
        <div className="scrollbox-inner">
          <Articles />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
