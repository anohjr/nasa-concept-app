/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from "react";
import CloseButtonIMG from "../components/CloseButton-img";
import NasaApi from "../api/nasa-api";
// import { useActionData } from "react-router-dom";
import Loupe from "../components/Loupe";

function ImageOfTheDay(props) {
  const todayDate = new Date();
  const todayDateURL = `${todayDate.getFullYear()}-${
    todayDate.getMonth() + 1
  }-${todayDate.getDate()}`;
  function afterApiCall(data) {
    // eslint-disable-next-line no-use-before-define
    setImageData(data);
    console.log(data);
  }

  // STATES -->

  const [imageData, setImageData] = useState(null);
  const [showDate, setShowDate] = useState(todayDateURL);

  console.log(showDate);
  useEffect(() => {
    NasaApi.getImage(afterApiCall, showDate);
  }, [showDate]);

  // FONCTION DATE FORMAT STRING -->

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function dateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = monthNames[today.getMonth()];
    const day = String(today.getDate()).padStart(2, "0");

    return `${year} ${month} ${day}`;
  }

  // LABEL INPUT DATE -->
  const dateLabel = document.querySelector("#myDate");

  // FONCTION LAST WEEK LI, STRING FORMAT -->

  function getLastWeekDays() {
    const weekArray = [];

    for (let i = 1; i <= 7; i++) {
      // const date = new Date(Date.UTC(2023, 0, 5, 10, 15, 10));
      const date = new Date();
      date.setDate(date.getDate() - i);
      // const month = monthNames[date.getMonth()];  --> format string
      let verifyZeroM;
      let verifyZeroD;
      if (date.getMonth() + 1 < 10) verifyZeroM = "0";
      if (date.getMonth() + 1 > 10) verifyZeroM = "";
      if (date.getDate() + 1 <= 10) verifyZeroD = "0";
      if (date.getDate() + 1 > 10) verifyZeroD = "";
      console.log("bug correct :", date.getDate() + 1);

      weekArray.push(
        `${date.getFullYear()}-${verifyZeroM}${
          date.getMonth() + 1
        }-${verifyZeroD}${date.getDate()}`
      );
    }
    return weekArray.map((e) => (
      <li
        key={e}
        style={
          showDate === e
            ? { color: "white", opacity: "1", scale: "1.05" }
            : null
        }
        className="li_day"
        onClick={() => {
          setShowDate(e);
          dateLabel.value = "";
        }}
      >
        {e}
      </li>
    ));
  }

  function closeButton() {
    props.setDisplayImgotd(false);
    props.setPopup("Imageotd");
    setTimeout(() => {
      setShowDate(todayDateURL);
    }, 1000);
  }

  return (
    <div>
      {props.matches && (
        <div
          id="Imageotd_popup"
          style={
            props.displayImgotd
              ? { left: "0", transitionDelay: "100ms" }
              : { left: "-100%", transitionDelay: "400ms" }
          }
        >
          <div id="header_container">
            <div id="imgotdMainTitle_container">
              <h1>Image of the Day</h1>
              <h4
                id="day_date"
                onClick={() => {
                  setShowDate(todayDateURL);
                  dateLabel.value = "";
                }}
                style={
                  showDate === todayDateURL
                    ? { fontWeight: "300", color: "cadetblue", opacity: "1" }
                    : null
                }
              >
                {dateString()}
              </h4>
            </div>
            <CloseButtonIMG close={closeButton} />
          </div>
          <div id="imgotd_overflow">
            <div
              id="imgotd_body"
              style={
                props.displayImgotd
                  ? { marginTop: "15%", transitionDelay: "350ms" }
                  : { marginTop: "110%" }
              }
            >
              <div id="IMG_otd_container">
                <img
                  id="IMG_otd"
                  src={imageData === null ? "" : imageData.url}
                  alt={imageData === null ? "" : imageData.title}
                />
              </div>
              <div id="IMG_title_credits">
                <h4 id="IMG_title">
                  {imageData === null ? "" : imageData.title}
                </h4>
                <p id="credits_title">
                  Credit & Copyright :{" "}
                  {imageData === null ? "" : imageData.copyright}
                </p>
              </div>
              <div id="explanation_txt">
                {imageData === null ? "" : imageData.explanation}
              </div>
            </div>
          </div>
          <ul id="Archives">
            <li id="Archives_title">Archives</li>
            {getLastWeekDays()}
            <li id="search_date">
              <div id="loupe-label_container">
                <Loupe />
                <input
                  type="date"
                  id="myDate"
                  name="search-date"
                  min="1995-06-16"
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setShowDate(e.target.value)}
                />
              </div>
              <div id="search_line_box">
                <div id="search_line" />
              </div>
            </li>
          </ul>
        </div>
      )}

      {!props.matches && (
        <div
          id="Imageotd_popup"
          style={props.displayImgotd ? { zIndex: "3" } : { zIndex: "-1" }}
        >
          <div id="header_container">
            <div id="imgotdMainTitle_container">
              <h1>Image of the Day</h1>
              <h4
                id="day_date"
                onClick={() => {
                  setShowDate(todayDateURL);
                  dateLabel.value = "";
                }}
                style={
                  showDate === todayDateURL
                    ? { fontWeight: "300", color: "cadetblue", opacity: "1" }
                    : null
                }
              >
                {dateString()}
              </h4>
            </div>
            <CloseButtonIMG close={closeButton} />
          </div>
          <div id="imgotd_overflow">
            <div id="imgotd_body">
              <div id="IMG_otd_container">
                <img
                  id="IMG_otd"
                  src={imageData === null ? "" : imageData.url}
                  alt={imageData === null ? "" : imageData.title}
                />
              </div>
              <div id="IMG_title_credits">
                <h4 id="IMG_title">
                  {imageData === null ? "" : imageData.title}
                </h4>
                <p id="credits_title">
                  Credit & Copyright :{" "}
                  {imageData === null ? "" : imageData.copyright}
                </p>
              </div>
              <div id="explanation_txt">
                {imageData === null ? "" : imageData.explanation}
              </div>
            </div>
          </div>
          <ul id="Archives">
            <li id="Archives_title">Archives</li>
            {getLastWeekDays()}
            <li id="search_date">
              <div id="loupe-label_container">
                <Loupe />
                <input
                  type="date"
                  id="myDate"
                  name="search-date"
                  min="1995-06-16"
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setShowDate(e.target.value)}
                />
              </div>
              <div id="search_line_box">
                <div id="search_line" />
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ImageOfTheDay;
