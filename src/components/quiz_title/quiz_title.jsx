import React from "react";
import styles from "./quiz_title.module.css";

const QuizTitle = ({ title }) => {
  return <h1 className={styles.title}>Q. {title}</h1>;
};

export default QuizTitle;
