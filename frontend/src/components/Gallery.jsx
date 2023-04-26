/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import CloseButton from "./CloseButton";
import ImageSquareContainer from "./GimageContainer";

function Gallery(props) {
  return (
    <div id="Gallery_popup" style={{ top: props.display ? "0" : "100%" }}>
      <div id="Gscroll_container">
        <div id="scroll_header">
          <h1>Image Gallery</h1>
          <div id="search_bar" />
          <div id="Sfilters_container">
            <div className="search_filter">Most popular</div>
            <div className="search_filter">Earth</div>
          </div>
        </div>
        <div id="feed_container">
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
          <ImageSquareContainer />
        </div>
      </div>
      <CloseButton closeGallery={() => props.setDisplay(false)} />
    </div>
  );
}

export default Gallery;
