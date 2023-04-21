import { useState } from "react";
import ImageSwiper from "./ImageSwiper";
import ImageGallery from "./ImageGallery";

import search from "../assets/search";

const countries = [
  {
    name: "Belgium",
    continent: "Europe",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "India",
    continent: "Asia",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg",
  },
  {
    name: "Bolivia",
    continent: "South America",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Ghana",
    continent: "Africa",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Japan",
    continent: "Asia",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Canada",
    continent: "North America",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "New Zealand",
    continent: "Australasia",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Italy",
    continent: "Europe",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "South Africa",
    continent: "Africa",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "China",
    continent: "Asia",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Paraguay",
    continent: "South America",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Usa",
    continent: "North America",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "France",
    continent: "Europe",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Botswana",
    continent: "Africa",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Spain",
    continent: "Europe",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Senegal",
    continent: "Africa",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Brazil",
    continent: "South America",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Denmark",
    continent: "Europe",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Mexico",
    continent: "South America",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Australia",
    continent: "Australasia",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Tanzania",
    continent: "Africa",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Bangladesh",
    continent: "Asia",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Portugal",
    continent: "Europe",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
  {
    name: "Pakistan",
    continent: "Asia",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
  },
];
// GmJrWvexeBC4z79UNrwhWg6RCtDfQFq5DCP5qiBh
// https://pokebuildapi.fr/api/v1/pokemon/limit/100
// https://images-api.nasa.gov/media_type?=image
// https://api.nasa.gov/planetary/apod?api_key=GmJrWvexeBC4z79UNrwhWg6RCtDfQFq5DCP5qiBh
function GalleryBody() {
  // const [myData, setMyData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");
  // const apiKey = "GmJrWvexeBC4z79UNrwhWg6RCtDfQFq5DCP5qiBh";

  const data = search.collection.items;

  // useEffect(() => {
  //   // fetch(`https://images-api.nasa.gov/search?q=moon&media_type=image`)
  //   //   .then((response) => response.json())
  //   //   .then((data) => setMyData(data.items))
  //   //   .catch((error) => console.error(error));

  //   setMyData(search.collection.items);
  // }, []);

  return (
    <div>
      {visible ? (
        <ImageSwiper
          image={image}
          setImage={setImage}
          setVisible={setVisible}
        />
      ) : (
        <ImageGallery
          myData={data}
          countries={countries}
          setVisible={setVisible}
          setImage={setImage}
        />
      )}
    </div>
  );
}

export default GalleryBody;
