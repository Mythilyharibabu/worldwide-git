import React from "react";
import LoadingSpinner from "./LoadingSpinner";

import Message from "./Message";
import CountryItem from "./CountryItem.jsx";
import { useCities } from "./Context/CityContext";

export default function Countries() {
  const {cities,loading} = useCities();
  if (loading) {
    return <LoadingSpinner />;
  }
  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;
  const countryList = cities.reduce((acc, currentcity) => {
    if (!acc.map((ele) => ele.country).includes(currentcity.country))
      // includes return bolean value if thestring contain  // duplication
      return [
        ...acc,
        { country: currentcity.country, emoji: currentcity.emoji },
      ];
    else return acc;
  }, []);
  console.log("country list", countryList);
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {countryList.map((ele, id) => {
        return <CountryItem countryList={ele} key={ele.id} />;
      })}
    </ul>
  );
}
