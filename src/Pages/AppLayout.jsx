import React from "react";
import Sidebar from "../components/Sidebar";
import MapComponent from "../components/MapComponent";
import styles from "../Pages/AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.applayout}>
      <Sidebar />
      <MapComponent />
    </div>
  );
}
