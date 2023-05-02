/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import telescopePNG from "../assets/telescope.png";

function ImgOtdButton(props) {
  return (
    <div className="img_otd_button_container" onClick={() => props.setDisplay(true)}>
      <h4 id="img_otd_title" className="nav_title">
        Image of the Day
      </h4>
      <img id="telescope_png" src={telescopePNG} alt="telescope logo" style={props.displayImgotd || props.displayGallery ? {opacity: "0"} : {opacity: "1", transitionDelay: "1.4s"}}/>
    </div>
  );
}

export default ImgOtdButton;
