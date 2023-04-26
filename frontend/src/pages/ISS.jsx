/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import MapISS from "../components/MapISS";

function Iss(props) {
  return (
    <div id="issBackground">
      <div
        id="map"
        style={{ opacity: props.displayGallery === true ? "0" : "1" }}
      >
        <MapISS />
      </div>
    </div>
  );
}

export default Iss;
