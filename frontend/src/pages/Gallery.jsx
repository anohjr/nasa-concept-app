import GalleryHeader from "../components/GalleryHeader";
import "./Gallery.css";
import GalleryBody from "../components/GalleryBody";

// eslint-disable-next-line react/prop-types
function Gallery({ setVisible }) {
  return (
    <div className="home" id="home">
      <GalleryHeader setVisible={setVisible} />
      <GalleryBody />
    </div>
  );
}

export default Gallery;
