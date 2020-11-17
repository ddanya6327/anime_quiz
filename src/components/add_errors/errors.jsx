import React from "react";
import styles from "./errors.module.css";

const Errors = ({ errors }) => {
  return (
    <div className={styles.errors}>
      次の項目を確認してください！
      <ul className={styles.error_list}>
        {errors.map((key, index) => (
          <li key={index}>{key}</li>
        ))}
      </ul>
    </div>
  );
};

export default Errors;
