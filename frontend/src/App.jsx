/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

// --> Components
import NavBar from "./components/NavBar";
import LogoNasa from "./components/logoNASA";
import Gallery from "./pages/Gallery";
import IssTitle from "./components/IssTitle";
// --> PAGES
import SolarSystem from "./pages/SolarSystem";

import Home from "./pages/Home";
import Iss from "./pages/ISS";

import "./App.css";

function App() {
  const [page, setPage] = useState("Home");
  const [displayGallery, setDisplayGallery] = useState(false);
  console.log(page);

  return (
    <>
      <div id="app_overflow">
        <Gallery display={displayGallery} setDisplay={setDisplayGallery} />

        <NavBar
          loadPage={setPage}
          currentPage={page}
          setDisplayGallery={setDisplayGallery}
          display={displayGallery}
        />
      </div>
      <LogoNasa displayGallery={displayGallery} />
      <IssTitle display={page} />
      <SwitchTransition>
        <CSSTransition key={page} timeout={350} classNames="page">
          {
            {
              ISS: <Iss displayGallery={displayGallery} />,
              SolarSystem: <SolarSystem displayGallery={displayGallery} />,
              Home: <Home />,
            }[page]
          }
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;
