import React from "react";
import styles from "./add_quiz_title.module.css";

const AddQuizTitle = () => {
  return (
    <input className={styles.title} type="text" placeholder="Quiz Title" />
  );
};

export default AddQuizTitle;
