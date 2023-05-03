/* eslint-disable react/prop-types */
import Sidebar from "../components/Sidebar";

function Home({ displayGallery, displayImgotd }) {
  console.info(displayGallery);
  return (
    <div id="Home_Page">
      {displayGallery || displayImgotd ? "" : <Sidebar />}
    </div>
  );
}

export default Home;
