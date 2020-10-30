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
      <div className={styles.main}>
        {Object.keys(quizList).length ? (
          <QuizList quizList={quizList} />
        ) : (
          <div className={styles.loading}> </div>
        )}
      </div>
    </section>
  );
};

export default List;
