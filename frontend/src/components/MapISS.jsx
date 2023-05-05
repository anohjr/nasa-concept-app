/* eslint-disable import/no-duplicates */
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

function MapISS() {
  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/sashiki05/clgxpvz1j00do01pg2syidspx",
      zoom: 0.8,
    });

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
          "icon-allow-overlap": true,
        },
      });
      map.on("click", "iss", (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(
            '<strong>Welcome to  Internationale Space Station </strong><p>Click&nbsp;<a href="https://www.nasa.gov/mission_pages/station/main/index.html" target="_blank" title="Opens in a new window">here&nbsp;</a>for more information about us </p>'
          )

          .addTo(map);
      });
      map.on("mouseenter", "iss", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "iss", () => {
        map.getCanvas().style.cursor = "";
      });

      const updateSource = setInterval(async () => {
        const newgeojson = await getLocation(updateSource);
        map.getSource("iss").setData(newgeojson);
      }, 4000);
    });
  }, []);
}

export default MapISS;
