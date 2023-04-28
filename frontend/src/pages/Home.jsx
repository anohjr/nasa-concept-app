/* eslint-disable react/prop-types */
import Sidebar from "../components/Sidebar";

import Button from "../components/ButtonIotd";

function Home({ displayGallery }) {
  return (
    <div id="Home_Page">
      {!displayGallery ? (
        <>
          <Sidebar />
          <Button />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
