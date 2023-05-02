/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

export default function ImagePreview({ image, setImage, setVisible, scroll }) {
  function handleClickImage() {
    console.info(scroll);
    setImage(image);
    setVisible(true);
  }
  return (
    <div className="imagePreviewContainer">
      <img
        src={image.links[0].href}
        key={image.data[0].nasa_id}
        alt={image.data[0].title}
        onClick={(event) => handleClickImage(event.target)}
      />
    </div>
  );
}
