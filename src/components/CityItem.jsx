import React, { useState } from "react";
import styles from "../components/CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "./Context/CityContext";
export default function CityItem({ city }) {
  const {positions,id} = city
  const {currentcitydetail,setCities,cities,deleteCity} =useCities()
  console.log("city is", city);
  // const [cityposition,setCityposition]= useState([positions.lat,positions.lang])
  
  /**delete action */
  const handleDelete =(id) =>{
    console.log("deleted item",id)
    // setCities(cities.filter((ele)=> id!==ele.id))
    deleteCity(id)
  }
  return (
    <>
      <Link className={`${styles.citiesdetail} ${id===currentcitydetail.id?styles['citydetailsactive']:''}`} to={`${city.id}?lat=${positions.lat}&lang=${positions.lang}`} 
      >
        <li>
          <img src={city.emoji} className={styles.emoji} />
        </li>
        <li>{city.cityname}</li>
        <li>{city.date}</li>
        <li>
          <button className={styles.deletebtn} onClick={()=>{handleDelete(id)}}>
            <span className={styles.crossitem} type="button"  >&times;</span>
          </button>
        </li>
      </Link>
   
    </>
  );
}
