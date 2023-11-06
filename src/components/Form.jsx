import React, { useEffect, useState } from "react";
import styles from "../components/Form.module.css";
import Buttons from "./Buttons";
import { useNavigate } from "react-router";
import useURLposition from "./hooks/useURLposition";
import Message from "./Message";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useCities } from "./Context/CityContext";
export default function Form() {
  const {lat, lang}= useURLposition();
  const {createCity} =  useCities();
  const navigate = useNavigate();
  const [cityname, setCityname] = useState("");
  const [country,setCountry] = useState('');
  const [note,setNote] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)
  const BASEURL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("handle events", e);
    if(!cityname || !note || !selectedDate) return;
    const newCity = {
      cityname,
      country,
      date:selectedDate,
      note,
      positions:{lat,lang}         
    }
    console.log("new city", newCity);
    setCityname(cityname)
    createCity(newCity);
    navigate("/app/cities")
  };
  useEffect(() => {
    async function fetchcity() {
      try {
        console.log("lat lang here is", lat, lang);
        const res = await fetch(`${BASEURL}?latitude=${lat}&longitude=${lang}`);
        res.json().then((data) => {
          console.log(data)
          setCityname(data.city || data.locality || "");
        setCountry(data.countryName)
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchcity();
  }, [lat, lang]);
  if(lat && lang== 0) return <Message message="Kindly select anywhere in the map"/>;
 
  return (
    
    <form className={styles.formstyle} onSubmit={(e) => handlesubmit(e)}>
      <label for="cityname">City Name</label>
      <br />
      <br />
      <input type="text" id="city" value={cityname} />
      <br />
      <br />
      <label for="place">Where did you go to</label>
      
      <br />
      <br />
      <DatePicker id="place" selected={selectedDate} onChange={(dates)=>setSelectedDate(dates)}/>
      <br />
      <br />
      <label for="trip">Notes about your trip to {cityname}</label>
      <br />
      <br />
      <input type="text" id="trip" onChange={(e)=>setNote(e.target.value)}/>
      <br />
      <br />
      
      <div className="">
        <Buttons type={styles.primary} space={styles.btn}>
          Add
        </Buttons>
        <Buttons
          space={styles.btn}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Back
        </Buttons>
      </div>
    </form>
  );
}
