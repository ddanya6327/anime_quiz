import React from "react";
import styles from "./quiz_list.module.css";
import ListItem from "../list_item/list_item";

const QuizList = ({ quizList }) => {
  return (
    <ul className={styles.list}>
      {quizList.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default QuizList;
