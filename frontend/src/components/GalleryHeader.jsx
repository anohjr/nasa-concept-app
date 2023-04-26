/* eslint-disable react/prop-types */
import nasaLogo from "../assets/nasa-logo.png";
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

  function closeGallery() {
    setGalleryVisible(false);
  }

  return (
    <div id="header">
      <img src={nasaLogo} alt="LOGO NASA" className="nasaLogo" />
      <h1>Image Gallery</h1>
      <input
        placeholder="Search here"
        type="text"
        name=""
        id="searchBar"
        value={searchQuery}
        onChange={(e) => handleChange(e)}
      />
      <button type="button" id="closeButton" onClick={closeGallery}>
        <img src={closeBttn} alt="" />
      </button>
      <button type="button" onClick={() => setSearchQuery("Mars")}>
        Mars
      </button>
    </div>
  );
}

export default GalleryHeader;
