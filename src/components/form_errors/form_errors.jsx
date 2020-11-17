import React from "react";
import styles from "./form_errors.module.css";

const FormErrors = ({ errors }) => {
  return (
    <div className={styles.errors}>
      次の項目を確認してください
      <ul className={styles.error_list}>
        {errors.map((key, index) => (
          <li key={index}>{key}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormErrors;
