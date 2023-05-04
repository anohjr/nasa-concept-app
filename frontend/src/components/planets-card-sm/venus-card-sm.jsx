/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import venusImg from "../../assets/planetsIMG/venus.jpg";

function VenusCardSm() {
  return (
    <div id="planet_card_container">
      <div id="planet_title_img">
        <h3 id="planet_title">VENUS</h3>
        <img id="planet_img" src={venusImg} alt="the sun" />
      </div>
      <div id="planet_text_container">
        <h4 id="planet_text_title">Terrestrial Planet</h4>
        <p id="planet_description">
          Venus spins slowly in the opposite direction from most planets. A
          thick atmosphere traps heat in a runaway greenhouse effect, making it
          the hottest planet in our solar system.
        </p>
      </div>
      <div id="distances_container">
        <h4 id="distance_number" style={{ color: "#d67a19" }}>
          225
        </h4>
        <p id="mesure_unity">EARTH DAYS</p>
      </div>
    </div>
  );
}

export default VenusCardSm;
