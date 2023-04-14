import GalleryHeader from "../components/GalleryHeader";
import "./Gallery-wrapper.css";
import SearchBar from "../components/GallerySearchBar";

function Gallery() {
  return (
    <div className="home" id="home">
      <GalleryHeader />
      <SearchBar />
    </div>
  );
}

export default Gallery;
