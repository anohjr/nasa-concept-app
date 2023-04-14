import "./App.css";
import Gallery from "./pages/Gallery";

function App() {
  function handleOpenClick() {
    document.getElementById("home").style.display = "block";
    document.getElementById("open").style.display = "none";
  }
  return (
    <div className="App">
      <Gallery />
      <button id="open" type="button" onClick={handleOpenClick}>
        Open
      </button>
    </div>
  );
}

export default App;
