/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
function IssTitle(props) {
  return (
    <div
      id="ISS_title_container"
      style={
        props.display === "ISS"
          ? { top: "3.5%", opacity: "1" }
          : { top: "-10%", opacity: "0" }
      }
    >
      <h1 style={{ textAlign: "end" }}>ISS Tracker</h1>
      <p id="ISS_title_text">
        Track the location of the International Space Station in real-time
      </p>
    </div>
  );
}

export default IssTitle;
