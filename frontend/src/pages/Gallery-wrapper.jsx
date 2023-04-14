import GalleryHeader from "../components/GalleryHeader";
import "./Gallery-wrapper.css";

function GalleryWrapper() {
  console.info("1", document.getElementsByClassName("home")[0]);
  return (
    <div className="home" id="home">
      <GalleryHeader />
    </div>
  );
}

export default GalleryWrapper;
