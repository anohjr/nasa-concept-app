/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import uranusImg from "../../assets/planetsIMG/uranus.jpg";

function UranusCard(props) {
  return (
    <div
      id="planet_card_container"
      className={
        props.selectedPlanet === "uranus-on" ? "display-on" : "display-off"
      }
    >
      <div id="planet_title_img">
        <h3 id="planet_title">URANUS</h3>
        <img id="planet_img" src={uranusImg} alt="the sun" />
      </div>
      <div id="planet_text_container">
        <h4 id="planet_text_title">Ice Giant</h4>
        <p id="planet_description">
          Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle
          from the plane of its orbit. This unique tilt makes Uranus appear to
          spin on its side.
        </p>
      </div>
      <div id="distances_container">
        <h4 id="distance_number" style={{ color: "#89ebff" }}>
          84
        </h4>
        <p id="mesure_unity">EARTH YEARS</p>
      </div>
    </div>
  );
}

export default UranusCard;
