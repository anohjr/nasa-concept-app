/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import sunImg from "../../assets/planetsIMG/sun.jpg";

function SunCardSm() {
  return (
    <div id="planet_card_container">
      <div id="planet_title_txt">
        <h3 id="planet_title">SUN</h3>
        <h4 id="planet_text_title">Yellow Dwarf Star</h4>
        <p id="planet_description">
          The Sun is a yellow dwarf star, a hot ball of glowing gases at the
          heart of our solar system. Its gravity holds everything from the
          biggest planets to tiny debris in its orbit.
        </p>
      </div>
      <div id="distances_container">
        <h4 id="distance_number">230</h4>
        <p id="mesure_unity">MILLION EARTH YEARS</p>
      </div>
      <div id="planet_img_container">
        <img id="planet_img" src={sunImg} alt="the sun" />
      </div>
    </div>
  );
}

export default SunCardSm;
