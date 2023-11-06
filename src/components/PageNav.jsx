import React from "react";
import styles from "./PageNav.module.css";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Logo from "./Logo";
const useStyles = makeStyles({
  btn: {
    background: "linear-gradient(45deg, #a4508b 30%, #5f0a87 90%)",
  },
});
export default function PageNav() {
  const classes = useStyles();
  return (
 
    <>
      <div className={`${styles.traveller} ${styles.headersec}`}>
       <Logo/>
        <div className={`${styles.topnavbar} `}>
          <Link to="/product">
            <b>PRODUCT</b>
          </Link>
          <Link to="/price">
            <b>PRICING</b>
          </Link>
          {/* /*overrided the mui button style using makeStyles */}
          <Button variant="contained" className={classes.btn}>
            <Link to='/login' className={styles.login}>LOG IN</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
