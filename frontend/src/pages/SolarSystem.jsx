import SolarSystemSVG from "../components/SolarSystemSVG";

function SolarSystem(props) {
  return (
    <div id="solar_system_page">
      <div id="header_container">
      </div>
      <SolarSystemSVG displayGallery={props.displayGallery}/>
    </div>
  );
}

export default SolarSystem;
