/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import earthImg from "../../assets/planetsIMG/earth.jpg";

function EarthCard(props) {
  return (
    <div
      id="planet_card_container"
      className={
        props.selectedPlanet === "earth-on" ? "display-on" : "display-off"
      }
    >
      <div id="planet_title_img">
        <h3 id="planet_title">EARTH</h3>
        <img id="planet_img" src={earthImg} alt="the sun" />
      </div>
      <div id="planet_text_container">
        <h4 id="planet_text_title">Terrestrial Planet</h4>
        <p id="planet_description">
          Earth—our home planet—is the only place we know of so far that’s
          inhabited by living things. It's also the only planet in our solar
          system with liquid water on the surface.
        </p>
      </div>
      <div id="distances_container">
        <h4 id="distance_number" style={{ color: "#5592c6" }}>
          365.25
        </h4>
        <p id="mesure_unity">DAYS</p>
      </div>
    </div>
  );
}

export default EarthCard;
