import LogoNasa from "../components/NASA_logo";
import NavBar from "../components/nav_bar";
import issIcon from "../assets/iss-icon.svg";
import worldMap from "../assets/world.svg";

function Iss() {
  return (
    <div id="issBackground">
      <div id="header_container">
        <LogoNasa />

        <div id="ISS_title_container">
          <h1 id="ISS_title">ISS Tracker</h1>
          <p id="ISS_title_text">
            Track the location of the International Space Station in real-time
          </p>
        </div>
      </div>
      <div id="map_container">
        <img id="map_img" src={worldMap} alt="world-map for ISS Tracker" />
        <img id="iss_logo" src={issIcon} alt="dynamic ISS logo" />
      </div>
      <NavBar />
    </div>
  );
}

export default Iss;
