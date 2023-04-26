/* eslint-disable react/prop-types */

import ImagePreview from "./ImagePreview";

// eslint-disable-next-line react/prop-types
export default function ImageGrid({ setImage, setVisible, myData }) {
  return (
    <div id="galleryImages">
      {myData.map((element) => (
        <ImagePreview
          image={element}
          setImage={setImage}
          setVisible={setVisible}
        />
      ))}
    </div>
  );
}
