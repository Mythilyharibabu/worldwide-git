import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../components/AppNav.module.css";
export default function AppNav() {
  return (
    <div style={{margin:'30px'}}>
      <ul className={styles.listing}>
        <li>
          <NavLink to="cities">
            <b>Cities</b>
          </NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
}
