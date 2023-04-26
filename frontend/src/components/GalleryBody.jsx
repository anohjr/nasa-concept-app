/* eslint-disable react/prop-types */
import { useState } from "react";
import ImageSwiper from "./ImageSwiper";
import ImageGrid from "./ImageGrid";

// import search from "../assets/search";

// GmJrWvexeBC4z79UNrwhWg6RCtDfQFq5DCP5qiBh
// https://pokebuildapi.fr/api/v1/pokemon/limit/100
// https://images-api.nasa.gov/media_type?=image
// https://api.nasa.gov/planetary/apod?api_key=GmJrWvexeBC4z79UNrwhWg6RCtDfQFq5DCP5qiBh

function GalleryBody({ data, setPageSize, setPageNum }) {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <div>
      {visible ? (
        <ImageSwiper
          myData={data}
          image={image}
          setImage={setImage}
          setVisible={setVisible}
          setPageSize={setPageSize}
          setPageNum={setPageNum}
        />
      ) : (
        <ImageGrid
          myData={data}
          setVisible={setVisible}
          visible={visible}
          setImage={setImage}
          setPageSize={setPageSize}
          setPageNum={setPageNum}
          setScrollPosition={setScrollPosition}
          scrollPosition={scrollPosition}

          // setSearchQuery={setSearchQuery}
        />
      )}
    </div>
  );
}

export default GalleryBody;
