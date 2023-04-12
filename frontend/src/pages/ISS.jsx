import LogoNasa from "../components/NASA_logo";

function Iss() {
  return (
    <div id="issBackground">
      <div id="header_container">
        <LogoNasa />

        <div id="ISS_title_container">
          <h1 id="ISS_title">ISS Tracker</h1>
          <p id="ISS_title_text">
            Track the location of the International Space Station in real-time
          </p>
        </div>
      </div>
    </div>
  );
}

export default Iss;
