import React from "react";
import styles from "./form_submit.module.css";

const FormSubmit = ({ saveQuizzes }) => {
  return (
    <button className={styles.submit} onClick={saveQuizzes}>
      퀴즈 등록
    </button>
  );
};

export default FormSubmit;
