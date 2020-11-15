import React from "react";
import styles from "./errors.module.css";

const Errors = ({ errors }) => {
  return (
    <div className={styles.errors}>
      다음 항목을 확인 해주세요.
      <ul className={styles.error_list}>
        {errors.map((key, index) => (
          <li key={index}>{key}</li>
        ))}
      </ul>
    </div>
  );
};

export default Errors;