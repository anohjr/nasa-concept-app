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
  const filterText = "Sagittarius";

  function handleChange(e) {
    setSearchQuery(e.target.value);
    setMyData([]);
    setPageNum(1);
  }

  return (
    <div id="header">
      <h1>Image Gallery</h1>
      <CloseButton setGalleryVisible={setGalleryVisible} />

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
          <FilterButton
            filterText={filterText}
            setSearchQuery={setSearchQuery}
            setMyData={setMyData}
            setPageNum={setPageNum}
          />
        </div>
      </div>
    </div>
  );
}

export default GalleryHeader;
