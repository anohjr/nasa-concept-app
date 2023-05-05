/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
function IssTitle(props) {
  return (
    <div
      id="ISS_title_container"
      style={
        props.display === "ISS" && (props.displayGallery || props.displayImgotd)!== true 
          ? { top: "0", marginTop: "3.5vh", opacity: "1" }
          : { top: "-10%", opacity: "0", transitionDelay: "0ms" }
      }
    >
      <h1 id="iss_title">ISS Tracker</h1>
      <p id="ISS_title_text">
        Track the location of the International Space Station in real-time
      </p>
    </div>
  );
}

export default IssTitle;
