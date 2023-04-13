import nasaLogo from "../assets/nasa-logo.png";

// import closeBttn from "../assets/close-button.png";

function GalleryHeader() {
  function closeGallery() {
    console.info("pouet");
    // document.getElementById("home").style.display = "none";
    console.info("2", document.getElementsByClassName("home")[0]);
    document.getElementsByClassName("home")[0].style.display = "none";
  }
  return (
    <div id="header">
      <img src={nasaLogo} alt="LOGO NASA" id="nasaLogo" />
      <h1>Image Gallery</h1>
      <button onClick={closeGallery} type="button">
        Close
      </button>
      {/* <img src={closeBttn} alt="" id="closeButton" /> */}
    </div>
  );
}

export default GalleryHeader;
