/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import MapISS from "../components/MapISS";

function Iss(props) {
  return (
    <div
      id="map"
      style={
        props.displayGallery || props.displayImgotd
          ? { zIndex: "0" }
          : { zIndex: "1", transitionDelay: "1.5s" }
      }
    >
      <MapISS />
    </div>
  );
}

export default Iss;
