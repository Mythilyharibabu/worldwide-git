import React, { useState } from "react";

export default function useGeolocation() {
  /**geolocation */
  const [error, setError] = useState(null);
  const [maplocation, setMapLocation] = useState({});
  function getPosition() {
    if (!navigator.geolocation) {
      return setError("Your browser does not support geolocation");
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      setMapLocation({
        lat: pos.coords.latitude,
        lang: pos.coords.longitude,
      }),
        (error) => {
          setError(error.msg);
        };
    });
  }
return { maplocation, error, getPosition}
}
