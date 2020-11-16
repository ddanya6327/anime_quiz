import React from "react";
import styles from "./main.module.css";
import Header from "../header/header";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className={styles.main}>
      <Header />
      <div className={styles.contents}>
        <div className={styles.mainBox}>
          <span>みんなで作るAnime Quiz！</span>
          <Link to="/list">
            <button>クイズにチャレンジする</button>
          </Link>
        </div>
      </div>
      <div className={styles.menuBox}>
        <div className="button">
          <Link to="/list">
            <button className={styles.menuButton}>Quiz List</button>
          </Link>
          <Link to="/add">
            <button className={styles.menuButton}>Create Your Quiz</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;
