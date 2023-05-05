/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import Sidebar from "../components/Sidebar";
import LogoNasa from "../components/logoNASA";

function Home(props) {
  return (
    <div id="Home_Page">
      <div>{!props.matches && <LogoNasa />}</div>
      <Sidebar
        displayGallery={props.displayGallery}
        displayImgotd={props.displayImgotd}
        matches={props.matches}
      />
    </div>
  );
}

export default Home;
