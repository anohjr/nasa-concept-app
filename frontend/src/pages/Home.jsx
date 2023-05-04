/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import Sidebar from "../components/Sidebar";

function Home(props) {
  return (
    <div id="Home_Page">
      <Sidebar
        displayGallery={props.displayGallery}
        displayImgotd={props.displayImgotd}
      />
    </div>
  );
}

export default Home;
