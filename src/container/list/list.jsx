import React, { useEffect, useState } from "react";
import styles from "./list.module.css";
import Header from "../header/header";
import QuizList from "../../components/quiz_list/quiz_list";

const List = ({ quizRepository }) => {
  const [quizList, setQuizList] = useState({});

  useEffect(() => {
    quizRepository.getQuizList(setQuizList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.quizList}>
      <Header />
      <QuizList quizList={quizList} />
    </section>
  );
};

export default List;
