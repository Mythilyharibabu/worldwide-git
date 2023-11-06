import React from "react";
import styles from "../components/Sidebar.module.css";
import Logo from "./Logo";
import { Outlet } from "react-router";
import AppNav from "./AppNav";
import { useCities } from "./Context/CityContext";
export default function Sidebar() {
  const {getPosition} = useCities();
  const handleClick=()=>{
    getPosition();
  }
  return (
    <div className={styles.sidebar}>
      <div className={styles.headerpart}>
        <Logo />
        <AppNav/>
        <Outlet />
        <footer className={styles.footerbar}>
          <p><small>Copyright@2020</small></p>
        </footer>
        
      </div>
    </div>
  );
}
