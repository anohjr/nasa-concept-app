/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import mercuryImg from "../../assets/planetsIMG/mercury.jpg";

function MercuryCardSm() {
  return (
    <div id="planet_card_container">
      <div id="planet_title_img">
        <h3 id="planet_title">MERCURY</h3>
        <img id="planet_img" src={mercuryImg} alt="the sun" />
      </div>
      <div id="planet_text_container">
        <h4 id="planet_text_title">Terrestrial Planet</h4>
        <p id="planet_description">
          Mercury—the smallest planet in our solar system and closest to the
          Sun—is only slightly larger than Earth's Moon. Mercury is the fastest
          planet, zipping around the Sun every 88 Earth days.
        </p>
      </div>
      <div id="distances_container">
        <h4 id="distance_number" style={{ color: "#7973dc" }}>
          88
        </h4>
        <p id="mesure_unity">EARTH DAYS</p>
      </div>
    </div>
  );
}

export default MercuryCardSm;
