/* eslint-disable react/prop-types */

import nasaLogo from "../assets/nasa-logo.png";
// eslint-disable-next-line react/prop-types
export default function ImageSwiper({ image, setVisible, setImage }) {
  console.info(image);
  function handleNextClick() {
    setImage(image.nextSibling);
  }
  function handlePreviousClick() {
    setImage(image.previousSibling);
  }
  return (
    <div className="imageSwiper">
      <div className="imageSwiperHeader">
        <img src={nasaLogo} alt="" />
        <h1>POUET</h1>
        <button type="button" onClick={() => setVisible(false)}>
          Fermer
        </button>
      </div>
      <div className="imageSwiperBody">
        <button
          type="button"
          onClick={handlePreviousClick}
          disabled={!image.previousSibling}
        >
          Précédent
        </button>
        <img src={image.currentSrc} alt="" />
        <button
          onClick={handleNextClick}
          type="button"
          disabled={!image.nextSibling}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
