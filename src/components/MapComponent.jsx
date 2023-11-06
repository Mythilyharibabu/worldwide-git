import React, { useEffect, useState } from "react";
// import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";
import styles from "../components/Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Marker, Popup } from "react-leaflet";
import { useCities } from "./Context/CityContext";
import useGeolocation from "./hooks/useGeolocation";
import { Button } from "@mui/material";
import useURLposition from "./hooks/useURLposition";
import User from "./User";

export default function MapComponent() {
  const { cities } = useCities();
  const [mapPosition, setMapposition] = useState([20, 50]);
  // const { lat: mapLat, lang: mapLang } = useURLposition();
  // console.log("url position in map",lat);
  // console.log("mapLat curee", mapLat);
  const navigate = useNavigate();
  const [searchparam, setSearchparam] = useSearchParams();
  const mapLat = searchparam.get("lat");
  const mapLang = searchparam.get("lang");
   console.log("url position in map",mapLang);

  useEffect(() => {
    console.log("cities map error", cities);
    if (mapLat && mapLang) {
      setMapposition([mapLat, mapLang]);
    }
  }, [mapLat, mapLang]);


  console.log("longtitude", mapLang, "latitude", mapLat);


  const { maplocation: mapgeolocation, getPosition } = useGeolocation();
  console.log("mapgeolocation", mapgeolocation);


  useEffect(() => {
    if (Object.keys(mapgeolocation).length > 0) {
      return setMapposition([mapgeolocation.lat, mapgeolocation.lang]);
    }
  }, [mapgeolocation]);
  console.log("map position here", mapPosition);

  
  return (
    <div className={styles.mapcontent} onClick={() => navigate("form")}>
      <User/>
      <MapContainer
        style={{ width: "100%", height: "90%" }}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution="contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((ele) => {
          return (
            <Marker position={mapPosition}>
              <Popup>
                A CSS3 {mapPosition}.
              </Popup>
            </Marker>
          );
        })}
      
        {/* <DetectClick/> */}
        <ChangeCenter viewPosition={mapPosition} />
        <DetectClick />
      </MapContainer>
      <button className={styles.mapclicks} onClick={getPosition}>
        MapClicks
      </button>
    </div>
  );
}

/**useParams hook which only helps you
 * extract the dynamic part of a URL, on the other hand, the useSearchParams
 *  hook allows us to extract the query parameters and also allows us to modify
 *  these query parameters in a URL */

function ChangeCenter({ viewPosition }) {
  const map = useMap(); //usemap is used to get the current instance of the map which is displayed
  map.setView(viewPosition);
  return null;
}
// function DetectClick() {
//   const navigate = useNavigate();
//   useMapEvents({
//     click: (e) => {

//       navigate(`form?lat`),
//       // console.log("event",e.target._lastCenter);
//       // console.log("event",e.target._lastCenter.lat,e.target._lastCenter.lang);
//     }
//   });
// }

// export default MapComponent;
function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      console.log("e target in map component",e.target)
      navigate(
        `form?lat=${e.target._lastCenter.lat}&lang=${e.target._lastCenter.lat}`
      );
      if(e.target._lastCenter.lat !== null){
        
      }
      console.log("setting lat lat by clicking", e.target._lastCenter);
    },
  });
}
