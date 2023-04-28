import "../App.css";
import img1 from "../assets/img1.jpg";

function ImgHome() {
  return (
    <div id="article">
      <div id="article-photo">
        <img src={img1} width={190} height={190} alt="" />
      </div>
      <div id="article-content">
        <p>
          POUET POUET POUETPOUET POUET POUETPOUET POUET POUETPOUET POUET POUET
        </p>
      </div>
    </div>
  );
}

export default ImgHome;
