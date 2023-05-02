/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import neptuneImg from "../../assets/planetsIMG/neptune.jpg";

function NeptuneCard(props) {
  return (
    <div
      id="planet_card_container"
      className={
        props.selectedPlanet === "neptune-on" ? "display-on" : "display-off"
      }
    >
      <div id="planet_title_img">
        <h3 id="planet_title">NEPTUNE</h3>
        <img id="planet_img" src={neptuneImg} alt="the sun" />
      </div>
      <div id="planet_text_container">
        <h4 id="planet_text_title">Ice Giant</h4>
        <p id="planet_description">
          Neptune—the eighth and most distant major planet orbiting our Sun—is
          dark, cold and whipped by supersonic winds. It was the first planet
          located through mathematical calculations, rather than by telescope.
        </p>
      </div>
      <div id="distances_container">
        <h4 id="distance_number" style={{ color: "#b7d0ff" }}>
          164.81
        </h4>
        <p id="mesure_unity">EARTH YEARS</p>
      </div>
    </div>
  );
}

export default NeptuneCard;
