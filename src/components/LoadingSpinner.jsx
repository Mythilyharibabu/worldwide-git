import React from "react";
import styles from "../components/LoadingSpinner.module.css";
export default function LoadingSpinner() {
  return (
    <div className={styles.spinnercontainer}>
      <div className={styles.loadingspinner}></div>
    </div>
  );
}
