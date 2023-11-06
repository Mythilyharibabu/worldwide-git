import React, { useEffect, useState } from "react";
import PageNav from "./PageNav";
import styles from "../components/Login.module.css";
import { useAuth } from "./Context/Authcontext";
import { useNavigate } from "react-router";
export default function Login() {
  const navigate = useNavigate();
  const [mailid, setMailid] = useState("mythily@gmail.com");
  const [password, setPassword] = useState("abcd");
  const { login,isAuthenticated,message } = useAuth();
  console.log("mailid", mailid);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (mailid && password) login(mailid, password);
  };
  useEffect(() => {
    console.log("isAuthenticated is", isAuthenticated)
    if(mailid && password){
      if (isAuthenticated) {
        return navigate("/app",{replace:true});
      }

    }
    },[isAuthenticated])
  return (
    <div>
      <PageNav />
      <form onSubmit={handlesubmit}>
        <div className={styles.login}>
          <div className={styles.othersection}>
            <label htmlFor="emailid">
              <b>Enter email id </b>
            </label>
            <input
              type="email"
              id="emaild"
              value={mailid}
              onChange={(e) => setMailid(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">
              <b>Enter Password </b>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.loginbtn}>
            <b>LOGIN</b>
          </button>
        </div>
        <p className={styles.message}> {!isAuthenticated && message }</p>
      </form>
    </div>
  );
}
