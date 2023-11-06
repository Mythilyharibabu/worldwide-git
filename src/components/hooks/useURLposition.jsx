import React from "react";
import { useSearchParams } from "react-router-dom";
export default function useURLposition() {
  const [searchparam, setSearchparam] = useSearchParams();
  const lat = searchparam.get("lat");
  console.log("url positions",lat)
  const lang = searchparam.get("lang");
  return [lat, lang];
}
