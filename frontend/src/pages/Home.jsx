/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import LogoNasa from "../components/logoNASA";

function Home(props) {
  useEffect(() => {
    window
      .matchMedia("(min-width: 431px)")
      .addEventListener("change", (e) => props.setMatches(e.matches));
  }, []);
  return (
    <div id="Home_Page">
      <div>{!props.matches && <LogoNasa />}</div>
      <Sidebar
        displayGallery={props.displayGallery}
        displayImgotd={props.displayImgotd}
      />
    </div>
  );
}

export default Home;
