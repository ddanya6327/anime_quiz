import React from "react";
import styles from "./answer_item.module.css";

const AnswerItem = ({ value, handleAnswerItem }) => {
  return (
    <li className={styles.item} onClick={handleAnswerItem} data-question={value}>
        {value}
    </li>
  );
};

export default AnswerItem;
