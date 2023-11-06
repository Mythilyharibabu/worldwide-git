import React, { useEffect } from "react";
import { useNavigate, useNavigationType, useParams } from "react-router";
import { useCities } from "./Context/CityContext";
import styles from "../components/CityDetails.module.css";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

export default function CityDetail() {
  const navigate=useNavigate()
  const { getCity, currentcitydetail } = useCities();
  const { cityid } = useParams(); //destructing the param  // useparam gives the param value
  console.log("cityid", cityid);
  useEffect(() => {
    getCity(cityid);
    console.log("currentcitydetail", currentcitydetail);
  }, [cityid]);
  return (
    <div className={styles.aboutcity}>
      <p style={{ textAlign: "left", color: "darkgray" }}>CITY NAME</p>
      <div style={{ textAlign: "left" }} className={styles.flags}>
        <img src={currentcitydetail.emoji} />
        <p>
          <b>{currentcitydetail.cityname}</b>
        </p>
      </div>
      <p style={{ textAlign: "left", color: "darkgray" }}>
        YOU WENT TO {currentcitydetail.country} on :{" "}
      </p>
      <p style={{ textAlign: "left" }}>
        <b>{currentcitydetail.date}</b>
      </p>
      <p style={{ textAlign: "left", color: "darkgray" }}>YOUR NOTES</p>
      <p style={{ textAlign: "left" }}>
        <b>{currentcitydetail.note}</b>
      </p>
      <p style={{ textAlign: "left", color: "darkgray" }}>LEARN MORE</p>
      <Link
        to={`https://en.wikipedia.org/wiki/${currentcitydetail.cityname}`}
        style={{ color: "cornsilk" }}
      >
        <b>Check Out on Wikepedia 👉</b><br/><br/>
      </Link>
      <Buttons onClick={()=>navigate(-1)}><b>👈 Back</b></Buttons>
    </div>
  );
}
