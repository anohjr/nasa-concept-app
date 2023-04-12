import LogoNasa from "../components/NASA_logo";
import NavBar from "../components/nav_bar";
import MapComponent from "../components/ISS_map";

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
      <MapComponent />
      <NavBar />
    </div>
  );
}

export default Iss;
