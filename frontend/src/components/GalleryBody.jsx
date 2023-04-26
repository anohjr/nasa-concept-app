/* eslint-disable react/prop-types */
import { useState } from "react";
import ImageSwiper from "./ImageSwiper";
import ImageGrid from "./ImageGrid";

// import search from "../assets/search";

// GmJrWvexeBC4z79UNrwhWg6RCtDfQFq5DCP5qiBh
// https://pokebuildapi.fr/api/v1/pokemon/limit/100
// https://images-api.nasa.gov/media_type?=image
// https://api.nasa.gov/planetary/apod?api_key=GmJrWvexeBC4z79UNrwhWg6RCtDfQFq5DCP5qiBh

function GalleryBody({ data }) {
  // const [myData, setMyData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");
  // const [myData, setMyData] = useState({});
  // const [searchQuery, setSearchQuery] = useState("");

  // const apiKey = "GmJrWvexeBC4z79UNrwhWg6RCtDfQFq5DCP5qiBh";

  // q=${searchQuery}&

  return (
    <div>
      {visible ? (
        <ImageSwiper
          myData={data}
          image={image}
          setImage={setImage}
          setVisible={setVisible}
        />
      ) : (
        <ImageGrid
          myData={data}
          setVisible={setVisible}
          setImage={setImage}

          // setSearchQuery={setSearchQuery}
        />
      )}
    </div>
  );
}

export default GalleryBody;
