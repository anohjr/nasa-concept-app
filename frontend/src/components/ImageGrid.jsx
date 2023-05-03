/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import ImagePreview from "./ImagePreview";

// eslint-disable-next-line react/prop-types
export default function ImageGrid({
  setImage,
  setVisible,
  myData,
  setPageNum,
  visible,
  scrollPosition,
  setScrollPosition,
}) {
  const listInnerRef = useRef();

  useEffect(() => {
    document.getElementById("galleryImages").scrollTop = scrollPosition;
  }, [visible]);

  const onScroll = () => {
    setScrollPosition(listInnerRef.current.scrollTop);
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        setPageNum((prevState) => prevState + 1);
      }
    }
  };
  return (
    <div id="galleryImages" onScroll={() => onScroll()} ref={listInnerRef}>
      {myData.map((element) => (
        <ImagePreview
          image={element}
          setImage={setImage}
          setVisible={setVisible}
          scroll={scrollPosition}
        />
      ))}
    </div>
  );
}
