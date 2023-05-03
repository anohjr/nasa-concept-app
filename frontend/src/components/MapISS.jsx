/* eslint-disable import/no-duplicates */
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

function MapISS() {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2FzaGlraTA1IiwiYSI6ImNsZ3E4dm1qZTBidjQzaW1za251bng4c3kifQ.B3nqQSIrzlvcopabVV4Icw";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/sashiki05/clgxpvz1j00do01pg2syidspx",
      zoom: 1.0,
    });

    // let zoomValue = map.getZoom();
    // console.log("zoom : ", zoomValue);
    map.loadImage("src/assets/ISS-icone.png", (error, image) => {
      if (error) throw error;
      map.addImage("my-custom-icon", image);
    });

    async function getLocation(updateSource) {
      try {
        const response = await fetch(
          "https://api.wheretheiss.at/v1/satellites/25544",
          { method: "GET" }
        );
        const { latitude, longitude } = await response.json();
        map.flyTo({
          center: [longitude, latitude],
          speed: 0.5,
        });
        return {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [longitude, latitude],
              },
            },
          ],
        };
      } catch (err) {
        if (updateSource) clearInterval(updateSource);
        throw new Error(err);
      }
    }
    map.scrollZoom.enable();

    map.on("load", async () => {
      const geojson = await getLocation();
      map.addSource("iss", {
        type: "geojson",
        data: geojson,
      });
      map.addLayer({
        id: "iss",
        type: "symbol",
        source: "iss",
        size: 0.25,
        layout: {
          "icon-image": "my-custom-icon",
        },
      });
      const updateSource = setInterval(async () => {
        const newgeojson = await getLocation(updateSource);
        map.getSource("iss").setData(newgeojson);
      }, 2000);
    });
  }, []);
}

export default MapISS;