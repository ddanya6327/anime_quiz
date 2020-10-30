import React from "react";
import styles from "./quiz_list.module.css";
import ListItem from "../list_item/list_item";

const QuizList = ({ quizList }) => {
  return (
    <ul className={styles.list}>
      {Object.keys(quizList).map((key) => (
        <ListItem item={quizList[key]} key={key} />
      ))}
    </ul>
  );
};

export default QuizList;
