/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import MapISS from "../components/MapISS";

function Iss(props) {
  return (
    <div id="ISS_container_for_transition">
      <div
        id="map"
        style={
          props.displayGallery || props.displayImgotd
            ? { zIndex: "0", opacity: "0.5" }
            : { zIndex: "1", transitionDelay: "1s", opacity: "1" }
        }
      >
        <MapISS />
      </div>
    </div>
  );
}

export default Iss;
