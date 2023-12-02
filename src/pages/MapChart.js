import React, { useEffect, useState } from "react";
import world from '../world.json';
import db from '../db.json'

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
// import { scaleLinear } from "d3-scale";

// const geoUrl =
//   "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

// const colorUrl = scaleLinear().domain([0, 6300000]).range(["#a72bb5", "green"]);

export default function MapChart() {
  const [countries, setCountries] = useState([]);
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  // const getData = () => {
  //   const apiUrl = db;
  //   console.log("Fetching data from:", apiUrl);
  
  //   fetch(apiUrl, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setCountries(data));
  // };

  useEffect(() => {
    // const apiUrl = db;
    setCountries(db.countries);
  }, []);

  return (
    <div className="flex justify-center w-full bg-white">
      <div style={{ width: "50vw", height: "80vh",backgroundColor: 'white', }} >
        <ComposableMap
          className="bg-white"
          width={1000}
          height={600}
          projectionConfig={{
            rotate: [1, 0, 0],
            scale: 147,
          }}
        >
          {countries.length > 0 ? (
            <ZoomableGroup zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}>
            <Geographies geography={world}>
              {({ geographies }) =>
                geographies.map((geo, index) => {
                  db.countries.find(
                    (s) => s.ISO3 === geo.properties.id
                  );
                  return (
                    <Geography
                      key={index}
                      geography={geo}
                      style={{
                        default: { fill: "#ff0" },
                        hover: { fill: "#f0f" },
                        pressed: { fill: "#02A" },
                      }}
                     
                      stroke="#607D8B"
                      strokeWidth={0.5}
                    />
                  );
                })
              }
            </Geographies>
            </ZoomableGroup>
          ) : (
            // <ZoomableGroup
            //   zoom={position.zoom}
            //   center={position.coordinates}
            //   onMoveEnd={handleMoveEnd}
            // >
            //   <Sphere stroke="red" strkeWidth={0.3} />
            //   <Graticule stroke="blue" strkeWidth={0.3} />

            // </ZoomableGroup>
            <p>loading ..</p>
          )}
        </ComposableMap>
      </div>
    </div>
  );
}
