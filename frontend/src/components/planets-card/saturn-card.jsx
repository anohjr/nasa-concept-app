/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import saturnImg from "../../assets/planetsIMG/saturn.jpg";

function SaturnCard(props) {
  return (
    <div
      id="planet_card_container"
      className={
        props.selectedPlanet === "saturn-on" ? "display-on" : "display-off"
      }
    >
      <div id="planet_title_img">
        <h3 id="planet_title">SATURN</h3>
        <img id="planet_img" src={saturnImg} alt="the sun" />
      </div>
      <div id="planet_text_container">
        <h4 id="planet_text_title">Gas Giant</h4>
        <p id="planet_description">
          Adorned with a dazzling, complex system of icy rings, Saturn is unique
          in our solar system. The other giant planets have rings, but none are
          as spectacular as Saturn's.
        </p>
      </div>
      <div id="distances_container">
        <h4 id="distance_number" style={{ color: "#eba357" }}>
          29.45
        </h4>
        <p id="mesure_unity">EARTH YEARS</p>
      </div>
    </div>
  );
}

export default SaturnCard;
