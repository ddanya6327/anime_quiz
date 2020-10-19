import React from "react";
import styles from "./quiz.module.css";
import QuizTitle from "../../components/quiz_title/quiz_title";
import QuizDetail from "../../components/quiz_detail/quiz_detail";
import QuizAnswer from "../../components/quiz_answer/quiz_answer";

const Quiz = () => {


  return (
      <section className={styles.quiz}>
        <QuizTitle />
        <QuizDetail />
        <QuizAnswer />
      </section>
  );
};

export default Quiz;
