/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import jupiterImg from "../../assets/planetsIMG/jupiter.jpg";

function JupiterCardSm() {
  return (
    <div id="planet_card_container">
      <div id="planet_title_img">
        <h3 id="planet_title">JUPITER</h3>
        <img id="planet_img" src={jupiterImg} alt="the sun" />
      </div>
      <div id="planet_text_container">
        <h4 id="planet_text_title">Gas Giant</h4>
        <p id="planet_description">
          Jupiter is more than twice as massive than the other planets of our
          solar system combined. The giant planet's Great Red spot is a
          centuries-old storm bigger than Earth.
        </p>
      </div>
      <div id="distances_container">
        <h4 id="distance_number" style={{ color: "#e96a76" }}>
          11.86
        </h4>
        <p id="mesure_unity">EARTH YEARS</p>
      </div>
    </div>
  );
}

export default JupiterCardSm;
