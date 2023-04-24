// import react from "react";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LogoNasa from "../components/NASA_logo";
import Button from "../components/Button_iotd";

function Home() {
  return (
    <div id="position_background">
      <div id="Background">
        <NavBar />
        <Sidebar />
        <LogoNasa />
        <Button />
      </div>
    </div>
  );
}

export default Home;
