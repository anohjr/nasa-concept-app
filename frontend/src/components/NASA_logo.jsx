import logo from "../assets/nasa-logo.png";

function LogoNasa() {
  return (
    <div id="nasa_logo_container">
      <img id="logo_img" src={logo} alt="logo of NASA" />
      <div id="logo_text_container">
        <h3 id="nasa_title">NASA</h3>
        <h3 id="nasa_text">Concept Application</h3>
      </div>
    </div>
  );
}
export default LogoNasa;
