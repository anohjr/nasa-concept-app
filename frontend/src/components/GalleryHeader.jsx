import nasaLogo from "../assets/nasa-logo.png";
import closeBttn from "../assets/close-button.png";

function GalleryHeader() {
  function closeGallery() {
    document.getElementById("home").style.display = "none";
    document.getElementById("open").style.display = "initial";
  }

  return (
    <div id="header">
      <img src={nasaLogo} alt="LOGO NASA" id="nasaLogo" />
      <h1>Image Gallery</h1>
      <button type="button" id="closeButton" onClick={closeGallery}>
        <img src={closeBttn} alt="" />
      </button>
    </div>
  );
}

export default GalleryHeader;
