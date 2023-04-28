/* eslint-disable react/prop-types */

import CloseButton from "./CloseButton";

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

  return (
    <div id="header">
      <div className="title">
        <h1>Image Gallery</h1>
        <CloseButton setGalleryVisible={setGalleryVisible} />
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
