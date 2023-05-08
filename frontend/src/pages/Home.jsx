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
      <div id="credits-dew-crew">
        <a
          href="https://www.linkedin.com/in/saverio-cutolo/"
          target="_blank"
          rel="noreferrer"
        >
          Saverio Cutolo
        </a>
        <a
          href="https://www.linkedin.com/in/naomi-rose-0818ab167/"
          target="_blank"
          rel="noreferrer"
        >
          Naomi Rose
        </a>
        <a
          href="https://www.linkedin.com/in/jeanmarcmillet/"
          target="_blank"
          rel="noreferrer"
        >
          Jean-Marc Millet
        </a>
        <a
          href="https://www.linkedin.com/in/etienne-chamarier-243843ba/"
          target="_blank"
          rel="noreferrer"
        >
          Etienne Chamarier
        </a>
      </div>
    </div>
  );
}

export default Home;
