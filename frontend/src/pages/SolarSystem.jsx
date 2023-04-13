import LogoNasa from "../components/NASA_logo";
import NavBar from "../components/nav_bar";
import solarSystemSVG from "../assets/solar-system.svg";

function SolarSystem() {
  return (
    <div id="solar_system_background">
      <div id="header_container">
        <LogoNasa />
      </div>
      <img
        id="solar_system_svg"
        src={solarSystemSVG}
        alt="dynamic solar system"
      />
      <NavBar />
    </div>
  );
}

export default SolarSystem;
