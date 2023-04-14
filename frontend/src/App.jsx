import "./App.css";
import GalleryWrapper from "./pages/Gallery-wrapper";

function App() {
  function handleOpenClick() {
    document.getElementById("home").style.display = "block";
  }
  return (
    <div className="App">
      <GalleryWrapper />
      <button type="button" onClick={handleOpenClick}>
        Open
      </button>
    </div>
  );
}

export default App;
