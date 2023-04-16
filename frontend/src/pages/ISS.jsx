/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import issIcon from "../assets/iss-icon.svg";
import worldMap from "../assets/world.svg";

function Iss(props) {
  return (
    <div id="issBackground">
      <div
        id="map_container"
        style={{ opacity: props.displayGallery === true ? "0" : "1" }}
      >
        <img id="map_img" src={worldMap} alt="world-map for ISS Tracker" />
        <img id="iss_logo" src={issIcon} alt="dynamic ISS logo" />
      </div>
    </div>
  );
}

export default Iss;
