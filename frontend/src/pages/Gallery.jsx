import { useState, useEffect } from "react";
import GalleryHeader from "../components/GalleryHeader";
import "../App.css";
import GalleryBody from "../components/GalleryBody";

// eslint-disable-next-line react/prop-types
function Gallery({ setDisplay, display, setPopup }) {
  const [myData, setMyData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    fetch(
      `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image&page_size=12&page=${pageNum}`,
      { hearders: { "Access-Control-Allow-Origin": "*" } }
    )
      .then((response) => response.json())
      .then((data) => {
        setMyData((prevState) => [...prevState, ...data.collection.items]);
      })
      .catch((error) => console.error(error));
  }, [searchQuery, pageNum]);

  return (
    <div className="gallery" id="home" style={{ top: display ? "0" : "100%" }}>
      <GalleryHeader
        setGalleryVisible={setDisplay}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        setPageNum={setPageNum}
        setMyData={setMyData}
        setPopup={setPopup}
      />
      {myData ? <GalleryBody data={myData} setPageNum={setPageNum} /> : ""}
    </div>
  );
}

export default Gallery;
