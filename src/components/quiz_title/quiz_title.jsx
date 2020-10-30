import React from "react";
import styles from "./quiz_title.module.css";

const QuizTitle = ({ title }) => {
  return <h1 className={styles.title}>{title && `Q. ${title["title"]}`}</h1>;
};

export default QuizTitle;
