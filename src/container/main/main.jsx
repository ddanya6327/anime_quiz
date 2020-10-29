import React from "react";
import styles from "./main.module.css";
import Header from "../header/header";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className={styles.main}>
      <Header />
      <div>
        <Link to="/list">
            <button>List 보기</button>
        </Link>
        <Link to="/add">
            <button>퀴즈 등록</button>
        </Link>
      </div>
    </section>
  );
};

export default Main;
