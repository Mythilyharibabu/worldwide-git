import React from "react";
import styles from "../components/CountryItem.module.css";
export default function CountryItem({ countryList }) {
  console.log("country cityname item", countryList.cityname);
  return (
    <>
      <div className={styles.countrydetail}>
        <li>
          <img src={countryList.emoji} className={styles.emoji} />
        </li>
        <li>{countryList.country}</li>
      </div>
    </>
  );
}
