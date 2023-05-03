/* eslint-disable no-restricted-syntax */
const baseUrl = "https://api.nasa.gov/";
const apiKey = "Vf9sdT6xCdjGyfgFnrWmuL3scey5OLaPmNFFCMeQ";
// https://api.nasa.gov/planetary/apod?api_key=Vf9sdT6xCdjGyfgFnrWmuL3scey5OLaPmNFFCMeQ&date=2023-03-01

function getImage(callBack, showDate) {
  const url = `${baseUrl}planetary/apod?api_key=${apiKey}&date=${showDate}`;
  try {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        callBack(json);
      });
  } catch (error) {
    console.log(error);
    callBack(null);
  }
}
export default { getImage };

//  --> fonction de callBack

// function getImage(data) {
//   if (data !== null) console.log(data);
//   else console.log("ERROR");
// }

// --> passer la fonction à getImageoftheDay pour qu'elle soit executée après avoir récupéré les données.

// const result = getImageoftheDay(getImage);
// console.log("result:", result);
