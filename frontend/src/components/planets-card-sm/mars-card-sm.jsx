/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import marsImg from "../../assets/planetsIMG/mars.png";

function MarsCardSm() {
  return (
    <div id="planet_card_container">
      <div id="planet_title_img">
        <h3 id="planet_title">MARS</h3>
        <img id="planet_img" src={marsImg} alt="the sun" />
      </div>
      <div id="planet_text_container">
        <h4 id="planet_text_title">Terrestrial Planet</h4>
        <p id="planet_description">
          Mars is a dusty, cold, desert world with a very thin atmosphere. There
          is strong evidence Mars was—billions of years ago—wetter and warmer,
          with a thicker atmosphere.
        </p>
      </div>
      <div id="distances_container">
        <h4 id="distance_number" style={{ color: "#3adede" }}>
          1.88
        </h4>
        <p id="mesure_unity">EARTH YEARS</p>
      </div>
    </div>
  );
}

export default MarsCardSm;
