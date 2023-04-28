/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */

import CloseButton from "./CloseButton";
// eslint-disable-next-line react/prop-types
export default function ImageSwiper({
  image,
  setVisible,
  setImage,
  myData,
  setPageNum,
}) {
  const indexOfImage = myData.findIndex((element) => element === image);
  console.info(image);
  function handleNextClick() {
    if (indexOfImage === myData.length - 2) {
      setPageNum((prevState) => prevState + 1);
    }
    console.info(image);
    setImage(myData[indexOfImage + 1]);
  }
  function handlePreviousClick() {
    setImage(myData[indexOfImage - 1]);
  }
  return (
    <div className="imageSwiper">
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="close_button"
      >
        <CloseButton />
      </button>

      <div className="imageSwiperBody">
        <button
          type="button"
          onClick={handlePreviousClick}
          disabled={indexOfImage < 1}
        >
          Précédent
        </button>
        <div className="imageDetailBody">
          <img src={image.links[0].href} alt="" />
          <h2>{image.data[0].title}</h2>

          {image.data[0].photographer ? (
            <p>Credits: {image.data[0].photographer}</p>
          ) : image.data[0].secondary_creator ? (
            <p>Credits: {image.data[0].secondary_creator}</p>
          ) : (
            ""
          )}
        </div>

        <button onClick={handleNextClick} type="button">
          Suivant
        </button>
      </div>
    </div>
  );
}
