import { useState, useEffect } from "react";
import GalleryHeader from "../components/GalleryHeader";
import "./Gallery.css";
import GalleryBody from "../components/GalleryBody";

// eslint-disable-next-line react/prop-types
function Gallery({ setDisplay }) {
  const [myData, setMyData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("earth");

  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    fetch(
      `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image&page_size=30&page=${pageNum}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.info(data.collection.items);
        setMyData((prevState) => [...prevState, ...data.collection.items]);
      })
      .catch((error) => console.error(error));

    // setMyData(search.collection.items);
  }, [searchQuery, pageNum]);
  // console.info(myData);

  return (
    <div className="gallery" id="home">
      <GalleryHeader
        setGalleryVisible={setDisplay}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        setPageNum={setPageNum}
        setMyData={setMyData}
      />
      {myData ? <GalleryBody data={myData} setPageNum={setPageNum} /> : ""}
    </div>
  );
}

export default Gallery;
