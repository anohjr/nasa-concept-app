/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */

import CloseButton from "./CloseButton";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
// eslint-disable-next-line react/prop-types
export default function ImageSwiper({
  image,
  setVisible,
  setImage,
  myData,
  setPageNum,
}) {
  const indexOfImage = myData.findIndex((element) => element === image);

  function handleNextClick() {
    if (indexOfImage === myData.length - 2) {
      setPageNum((prevState) => prevState + 1);
    }

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
          id="swiperButtonPrevious"
        >
          <LeftArrow />
        </button>

        <div className="imageDetailBody">
          <img src={image.links[0].href} alt={image.data[0].title} />
        </div>
        <div className="imageDetailFooter">
          <h2>{image.data[0].title}</h2>

          {image.data[0].photographer ? (
            <p>Credits: {image.data[0].photographer}</p>
          ) : image.data[0].secondary_creator ? (
            <p>Credits: {image.data[0].secondary_creator}</p>
          ) : (
            ""
          )}
        </div>

        <button
          onClick={handleNextClick}
          disabled={false}
          type="button"
          id="swiperButtonNext"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
}
