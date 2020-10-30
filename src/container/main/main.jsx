import React from "react";
import styles from "./main.module.css";
import Header from "../header/header";
import { Link } from "react-router-dom";

const Main = () => {
  const test = (event) => {
    event.currentTarget.innerText = "쳐 누르지마 \n ㅅㅂ";
  };

  return (
    <section className={styles.main}>
      <Header />
      <div className={styles.contents}>
        <Link to="/list">
          <button className={styles.mainButton}>퀴즈 리스트</button>
        </Link>
        <Link to="/add">
          <button className={styles.mainButton}>퀴즈 등록</button>
        </Link>
        <button className={styles.mainButton} onClick={test}>
          구색맞추기용 버튼1
        </button>
        <button className={styles.mainButton} onClick={test}>
          구색맞추기용 버튼2
        </button>
        <button className={styles.mainButton} onClick={test}>
          구색맞추기용 버튼3
        </button>
        <button className={styles.mainButton} onClick={test}>
          구색맞추기용 버튼4
        </button>
      </div>
    </section>
  );
};

export default Main;
