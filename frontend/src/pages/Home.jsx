import NavBar from "../components/nav_bar";
import Sidebar from "../components/Sidebar";
import LogoNasa from "../components/logoNASA";
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
