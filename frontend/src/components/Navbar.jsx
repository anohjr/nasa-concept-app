// import Iss from "@pages/ISS";
import { Link } from "react-router-dom";
import diamond from "../assets/diamond.svg";

function NavBar() {
  return (
    <div id="navbar_container">
      <div id="navtitle_container">
        <Link to="/">
          <div
            id="nav_topics"
            className={
              window.location.pathname === "/"
                ? "section_container active"
                : "section_container"
            }
          >
            <img className="diamond_svg" src={diamond} alt="diamond logo svg" />
            <h4 className="nav_title">Topics</h4>
          </div>
        </Link>

        <Link to="/gallery">
          <div id="nav_gallery" className="section_container">
            <img className="diamond_svg" src={diamond} alt="diamond logo svg" />
            <h4 className="nav_title">Gallery</h4>
          </div>
        </Link>
        <Link to="/solar-system">
          <div id="nav_solar" className="section_container">
            <img className="diamond_svg" src={diamond} alt="diamond logo svg" />
            <h4 className="nav_title">Solar System</h4>
          </div>
        </Link>
        <Link to="/iss">
          <div
            id="nav_iss"
            className={
              window.location.pathname === "/iss"
                ? "section_container active"
                : "section_container"
            }
          >
            <img className="diamond_svg" src={diamond} alt="diamond logo svg" />
            <h4 className="nav_title">ISS Tracker</h4>
          </div>
        </Link>
      </div>
      <div id="bar_container">
        <div id="topics_bar" className="section_bar" />
        <div id="gallery_bar" className="section_bar" />
        <div id="solar_bar" className="section_bar" />
        <div id="ISS_bar" className="section_bar" />
        <div id="progression_bar" />
      </div>
    </div>
  );
}

export default NavBar;
