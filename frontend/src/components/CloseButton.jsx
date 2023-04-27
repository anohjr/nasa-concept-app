function CloseButton(props) {
  return (
    <svg
      // eslint-disable-next-line react/prop-types, react/destructuring-assignment
      onClick={props.closeGallery}
      id="close_button"
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30.5" cy="30.5" r="29.5" stroke="white" strokeWidth="1.5" />
      <path
        d="M14 18L26.5 30L14.5 43L18.5 46.5L30.5 34L43 46L46.5 42.5L34 30L46.5 17.5L43 14L30.5 26.5L18 14L14 18Z"
        stroke="white"
        strokeWidth="1.5"
        fill="#D9D9D9"
      />
    </svg>
  );
}

export default CloseButton;
