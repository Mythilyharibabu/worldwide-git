import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";

const Authcontent = createContext();

const initialdata = {
  user: null,
  isAuthenticated: false,
  message: " ",
};
const FAKEUSER = {
  name:"mythily",
  avatar:"/src/assets/beauty.png",
  emailid: "mythily@gmail.com",
  password: "abc",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "incorrect":
      return {
        ...state,
        isAuthenticated: false,
        message: action.payload,
      };
    case "logout":
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};
function Authprovider({ children }) {
  const [{ user, isAuthenticated, message }, dispatch] = useReducer(
    reducer,
    initialdata
  );

  function login(emailid, password) {
    console.log("you are entered into login", emailid, password);
    if (emailid === FAKEUSER.emailid && password === FAKEUSER.password) {
      dispatch({ type: "login", payload: FAKEUSER });
    } else {
      dispatch({
        type: "incorrect",
        payload: "Kindly provide the correct credentials",
      });
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <Authcontent.Provider
      value={{ user, isAuthenticated, message, login, logout }}
    >
      {children}
    </Authcontent.Provider>
  );
}

function useAuth() {
  const auth = useContext(Authcontent);
  if (auth == null) throw new Error("undefined auth context");
  return auth;
}

export { Authprovider, useAuth };
