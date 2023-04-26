import { useState } from "react";
import "./App.css";
import Gallery from "./pages/Gallery";

function App() {
  const [galleryVisible, setGalleryVisible] = useState(false);

  function handleOpenClick() {
    setGalleryVisible(true);
  }
  return (
    <div className="App">
      {galleryVisible ? (
        <Gallery
          setGalleryVisible={setGalleryVisible}
          galleryVisible={galleryVisible}
        />
      ) : (
        <button id="open" type="button" onClick={handleOpenClick}>
          Open
        </button>
      )}
    </div>
  );
}

export default App;
