/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import diamondFull from "../assets/diamondFull.svg";
import diamond from "../assets/diamond.svg";
// IMPORTS LOGO FOR SM RESPONSIVE -->
import PictureLogoOff from "./nav-bar-icons/pictureLogo-off";
import HomeLogoOff from "./nav-bar-icons/homeLogo-off";
import SaturnLogoOff from "./nav-bar-icons/saturnLogo-off";
import IssLogoOff from "./nav-bar-icons/issLogo-off";
import TelescopeLogoOff from "./nav-bar-icons/telescopeLogo-off";

function NavBar(props) {
  useEffect(() => {
    window
      .matchMedia("(min-width: 431px)")
      .addEventListener("change", (e) => props.setMatches(e.matches));
  }, []);

  return (
    <div>
      {props.matches && (
        <div
          id="navbar_container"
          style={
            props.displayGallery
              ? { bottom: "-20%", transitionDelay: "0ms" }
              : props.displayImgotd
              ? { bottom: "-20%", transitionDelay: "0ms" }
              : props.displayImgotd === false &&
                props.currentPopup === "Imageotd"
              ? { transitionDelay: "1s", bottom: "0" }
              : props.displayGallery === false &&
                props.currentPopup === "Gallery"
              ? { bottom: "0", transitionDelay: "600ms" }
              : { bottom: "0", transitionDelay: "0s" }
          }
          // props.displayImgotd ? { bottom: "-20%", transitionDelay: "0ms" } : { bottom: "0", transitionDelay: "1s" }
        >
          <div id="navtitle_container">
            <div id="nav_topics" className="section_container">
              <img
                className="diamond_svg"
                src={props.currentPage === "Home" ? diamondFull : diamond}
                alt="diamond logo svg"
              />
              <h4 className="nav_title" onClick={() => props.loadPage("Home")}>
                Home
              </h4>
            </div>
            <div id="nav_gallery" className="section_container">
              <img
                className="diamond_svg"
                src={diamond}
                alt="diamond logo svg"
              />
              <h4
                className="nav_title"
                onClick={() => props.setDisplayGallery(true)}
              >
                Gallery
              </h4>
            </div>
            <div id="nav_solar" className="section_container">
              <img
                className="diamond_svg"
                src={
                  props.currentPage === "SolarSystem" ? diamondFull : diamond
                }
                alt="diamond logo svg"
              />
              <h4
                className="nav_title"
                onClick={() => props.loadPage("SolarSystem")}
              >
                Solar System
              </h4>
            </div>
            <div id="nav_ISS" className="section_container">
              <img
                className="diamond_svg"
                src={props.currentPage === "ISS" ? diamondFull : diamond}
                alt="diamond logo svg"
              />
              <h4 className="nav_title" onClick={() => props.loadPage("ISS")}>
                ISS Tracker
              </h4>
            </div>
          </div>
          <div id="bar_container">
            <div
              id="dynamic_bar"
              className="section_bar"
              style={{
                left:
                  props.currentPage === "Home"
                    ? "0"
                    : props.currentPage === "SolarSystem"
                    ? "50%"
                    : props.currentPage === "ISS"
                    ? "75%"
                    : null,
              }}
            />
            <div id="progression_bar" />
          </div>
        </div>
      )}
      {!props.matches && (
        <div id="navbar_container">
          <div className="icon_container">
            <HomeLogoOff
              loadPageHome={() => {
                props.loadPage("Home");
                props.setDisplayGallery(false);
              }}
            />
            <PictureLogoOff
              setDisplayGalleryTrue={() => props.setDisplayGallery(true)}
            />
            <SaturnLogoOff
              loadPageSaturn={() => {
                props.loadPage("SolarSystem");
                props.setDisplayGallery(false);
              }}
            />
            <IssLogoOff
              loadPageIss={() => {
                props.loadPage("ISS");
                props.setDisplayGallery(false);
              }}
            />
            <TelescopeLogoOff 
             setDisplayImgotd={() => {
              props.setDisplayImgotd(true)
             }}
             />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
