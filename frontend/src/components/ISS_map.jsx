import worldMap from "../assets/world-map.png";

function MapComponent() {
  return (
    <div id="map_container">
      <img id="map_img" src={worldMap} alt="world-map for ISS Tracker" />
    </div>
  );
}

export default MapComponent;
