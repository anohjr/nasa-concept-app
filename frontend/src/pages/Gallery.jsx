import { useState, useEffect } from "react";
import GalleryHeader from "../components/GalleryHeader";
import "./Gallery.css";
import GalleryBody from "../components/GalleryBody";

// eslint-disable-next-line react/prop-types
function Gallery({ setGalleryVisible }) {
  const [myData, setMyData] = useState();
  const [searchQuery, setSearchQuery] = useState("earth");
  // eslint-disable-next-line no-unused-vars
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    fetch(
      `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image&page_size=${pageSize}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.info(data.collection.items);
        setMyData(data.collection.items);
      })
      .catch((error) => console.error(error));

    // setMyData(search.collection.items);
  }, [searchQuery]);
  // console.info(myData);

  return (
    <div className="home" id="home">
      <GalleryHeader
        setGalleryVisible={setGalleryVisible}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      {myData ? <GalleryBody data={myData} /> : ""}
    </div>
  );
}

export default Gallery;
