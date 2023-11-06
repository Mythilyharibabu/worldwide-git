import React from "react";
import { Link } from "react-router-dom";
import styles from "../Pages/Home.module.css";
import PageNav from "../components/PageNav";

export default function Home() {
  return (
    <>


      <div>
        <PageNav />
        <div className={`${styles.adventure}`}>
          <h2>
            <b>
              You travel the world.
              <br />
              WorldWide keeps track of your <br /> adventures
            </b>
          </h2>
          <p>
            A world map that tracks your footsteps into every city you can think
            of.Never forget
            <br />
            your wonderful experiences, and show your friends how you have
            wandered the <br /> world.
          </p>
          <Link to="/app" className={styles.cta}>
            START TRACKING NOW
          </Link>
        </div>
      </div>
    </>
  );
}
