import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const Contextcity = createContext();
const BASE_URL = "http://localhost:9000";

const initialdata = {
  cities: [],
  loading: false,
  currentcitydetail: {},
  err: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "isLoadedcontent": {
      return { ...state, loading: true };
    }
    case "loadeddata":
      return { ...state, loading: false, cities: action.payload };

    case "currentcontents":
      return { ...state, loading: false, currentcitydetail: action.payload };

    case "createcontent":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };

    case "deletecontent":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };

    case "rejectcontent":
      return { ...state, err: action.payload };

    default:
      throw new Error("nothing");
  }
};

export default function CityContextProvider({ children }) {
  // const [cities, setCities] = useState([""]);
  // const [loading, setLoading] = useState(false);
  // const [currentcitydetail, setCurrentcitydetail] = useState("");
  const [{ cities, loading, currentcitydetail,err }, dispatch] = useReducer(
    reducer,
    initialdata
  );

  useEffect(() => {
    async function fetchdata() {
    //  dispatch({ type: "isLoadedcontent" });
      try {
        //console.log('cities data are',citiesdata)
        await fetch(`${BASE_URL}/citiesdata`).then((res) => {
          return res.json().then((data) => {
            dispatch({ type: "loadeddata", payload: data });
          });
        });
      } catch {
        dispatch({ type: "rejectcontent", payload: "There is some error in fetch" });
      }
    }
    fetchdata();
  }, []);

  async function getCity(id) {
    //dispatch({ type: "isLoadedcontent" });
    try {
      await fetch(`${BASE_URL}/citiesdata/${id}`).then((res) => {
        return res.json().then((data) => {
          dispatch({ type: "currentcontents", payload: data });
        });
      });
    } catch {
      dispatch({
        type: "rejectcontent",
        payload: "There is some error in current city",
      });
    }
  }

  async function createCity(newcity) {
    //dispatch({ type: "isLoadedcontent" });
    console.log("new added", newcity);
    try {
      await fetch(`${BASE_URL}/citiesdata`, {
        method: "POST",
        body: JSON.stringify(newcity),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((ress) => {
        return ress.json().then((data) => {
          dispatch({ type: "createcontent", payload: data });
          // setCities([...cities, data]);
          console.log("data here is cities", cities);
        });
      });
    } catch {
      dispatch({
        type: "rejectcontent",
        payload: "There is some error in post call",
      });
    }
  }

  async function deleteCity(cityid) {
   // dispatch({ type: "isLoadedcontent" });
    try {
      await fetch(`${BASE_URL}/citiesdata/${cityid}`, {
        method: "DELETE",
      });
      dispatch({ type: "deletecontent", payload: cityid });
      //  setCities(cities.filter((ele) => cityid !== ele.id));
    } catch {
      dispatch({
        type: "rejectcontent",
        payload: "There is some error in delete call",
      });
    }
  }
  //console.log("map position" , mapposition.lat)
  // console.log("created city",city)
  return (
    <>
      <Contextcity.Provider
        value={{
          cities,
          err,
          loading,
          currentcitydetail,
          getCity,
          createCity,
          deleteCity,
        }}
      >
        {children}
      </Contextcity.Provider>
    </>
  );
}

function useCities() {
  const context = useContext(Contextcity);
  // if(context===undefined) throw new error 'something wrong in context'
  return context;
}
export { CityContextProvider, useCities };
