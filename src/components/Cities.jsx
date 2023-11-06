import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import CityItem from "../components/CityItem";
import Message from "./Message";
import { useCities } from "./Context/CityContext";

export default function Cities() {
  const { cities, loading } = useCities();
  console.log("newly.added..are", cities);
  if (loading) {
    return <LoadingSpinner />;
  }
  if (cities.length == 0)
    return <Message message="Add your first city by clicking on the map" />;
  console.log("cities are", cities);

  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {cities.map((city) => (
    <li>
      <CityItem key={city.id} city={city}/>
    </li>
  ))}
    </ul>
  );
}
