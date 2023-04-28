/* eslint-disable react/prop-types */

import closeBttn from "../assets/close-button.png";

function GalleryHeader({
  setGalleryVisible,
  searchQuery,
  setSearchQuery,
  setPageNum,
  setMyData,
}) {
  function handleChange(e) {
    setSearchQuery(e.target.value);
    setMyData([]);
    setPageNum(1);
  }

  function handleClickFilter(e) {
    setSearchQuery(e);
    setPageNum(1);
    setMyData([]);
  }

  function closeGallery() {
    setGalleryVisible(false);
  }

  return (
    <div id="header">
      <div className="title">
        <h1>Image Gallery</h1>
        <button type="button" id="closeButton" onClick={closeGallery}>
          <img src={closeBttn} alt="" />
        </button>
      </div>

      <div className="searchBar">
        <input
          placeholder="Search here &#128270;"
          type="text"
          name=""
          id="searchBar"
          value={searchQuery}
          onChange={(e) => handleChange(e)}
        />
        <div id="filters">
          <button
            type="button"
            onClick={(e) => handleClickFilter(e.target.innerText)}
          >
            Mars
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryHeader;
