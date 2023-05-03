/* eslint-disable react/prop-types */

import CloseButton from "./CloseButton";
import FilterButton from "./FilterButton";

function GalleryHeader({
  setGalleryVisible,
  searchQuery,
  setSearchQuery,
  setPageNum,
  setMyData,
}) {
  const filterArray = ["Sagittarius", "Earth", "Quiz"];

  function handleChange(e) {
    setSearchQuery(e.target.value);
    setMyData([]);
    setPageNum(1);
  }
  function closeGallery() {
    setGalleryVisible(false);
  }

  return (
    <div id="header">
      <h1>Image Gallery</h1>
      <button type="button" onClick={closeGallery} className="close_button">
        <CloseButton />
      </button>

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
          {filterArray.map((e) => {
            return (
              <FilterButton
                filterText={e}
                setSearchQuery={setSearchQuery}
                setMyData={setMyData}
                setPageNum={setPageNum}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GalleryHeader;
