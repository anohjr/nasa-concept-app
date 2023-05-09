/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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

  function handleImageClick() {
    // eslint-disable-next-line no-restricted-globals, no-alert
    const check = confirm(
      "Are you sure ? This will open the original image in a new tab (this image can be voluminous)"
    );
    if (check) {
      fetch(`${image.href}`, {
        hearders: { "Access-Control-Allow-Origin": "*" },
      })
        .then((response) => response.json())
        .then((data) => {
          window.open(data[0], "_blank").focus();
        })
        .catch((error) => console.error(error));
    }
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
      <button
        type="button"
        onClick={handlePreviousClick}
        disabled={indexOfImage < 1}
        id="swiperButtonPrevious"
      >
        <LeftArrow />
      </button>
      <button
        onClick={handleNextClick}
        disabled={indexOfImage >= myData.length - 1}
        type="button"
        id="swiperButtonNext"
      >
        <RightArrow />
      </button>
      <div className="imageSwiperBody">
        <div className="imageDetailBody">
          <img
            title="Open original image in new tab"
            src={image.links[0].href}
            alt={image.data[0].title}
            onClick={handleImageClick}
          />
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
      </div>
    </div>
  );
}
