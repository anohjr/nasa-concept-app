/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
function UpDownArrow(props) {
  return (
    <svg
      id="up_down_arrow"
      width="28"
      height="17"
      viewBox="0 0 28 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={ props.displayGallery || props.displayImgotd ? {opacity: "0"} : {opacity: "1", transitionDelay: "1.4s"}}
    >
      <path
        d="M26.0416 15.0208L14.0208 3L2 15.0208"
        stroke="white"
        strokeWidth="4"
      />
    </svg>
  );
}

export default UpDownArrow;
