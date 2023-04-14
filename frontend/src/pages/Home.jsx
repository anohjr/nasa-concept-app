// import react from "react";
import backgroundImage from "../assets/homeWallpaper.jpg";
import NavBar from "../components/Navbar";

function App() {
  return (
    <div className="App">
      <img src={backgroundImage} alt="Space view" />
      <NavBar />
    </div>
  );
}

export default App;
