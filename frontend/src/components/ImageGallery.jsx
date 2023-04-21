/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function ImageGallery({
  countries,
  setImage,
  setVisible,
  myData,
}) {
  const [searchText, setSearchText] = useState("");

  function handleChange(e) {
    setSearchText(e.target.value);
  }
  let filteredCountries;
  if (searchText) {
    const lowerCaseText = searchText.toLowerCase();

    filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().match(lowerCaseText)
    );
    console.info(filteredCountries);
  }

  function handleClickImage(event) {
    setImage(event.target);
    setVisible(true);
    console.info(event.target);
  }

  return (
    <>
      <input
        placeholder="Search here"
        type="text"
        name=""
        id="searchBar"
        value={searchText}
        onChange={handleChange}
      />

      <div id="galleryImages">
        {filteredCountries
          ? filteredCountries.map((country) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <img
                key={country.name}
                src={country.url}
                alt=""
                onClick={(event) => handleClickImage(event)}
              />
            ))
          : myData.map((element) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <img
                src={element.links[0].href}
                key={element.data[0].title}
                alt="test"
                onClick={(event) => handleClickImage(event)}
              />
            ))}
      </div>
    </>
  );
}
