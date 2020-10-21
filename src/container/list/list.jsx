import React from "react";
import styles from "./list.module.css";
import Header from "../header/header";
import QuizList from "../../components/quiz_list/quiz_list";
import quiz_list from "../../common/test_quiz/test_list1";

const List = () => {
  return (
    <section className={styles.quizList}>
      <Header />
      <QuizList quizList={quiz_list} />
    </section>
  );
};

export default List;
