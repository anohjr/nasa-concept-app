// import react from "react";
import backgroundImage from "../assets/homeWallpaper.jpg";
import NavBar from "../components/Navbar";
import ImgHome from "../components/Image_home";
import Sidebar from "../components/Sidebar";

function App() {
  return (
    <div className="position_background">
      <div id="Background">
        <img src={backgroundImage} alt="Space view" />
        <NavBar />
        {/* <ImgHome /> */}
        {/* <ImgHome /> */}
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
