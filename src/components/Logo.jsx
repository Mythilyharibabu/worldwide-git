import React from "react";
import styles from "./PageNav.module.css";
export default function Logo() {
  return (
    <div className={`${styles.topbar} `}>
      <img src="../../src/assets/earth.png" className={`${styles.worldimg}`} />
      <h2 className={styles.text}>
        <b>WorldWide</b>
      </h2>
    </div>
  );
}
