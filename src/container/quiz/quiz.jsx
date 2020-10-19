import React, { useState } from "react";
import styles from "./quiz.module.css";
import QuizTitle from "../../components/quiz_title/quiz_title";
import QuizDetail from "../../components/quiz_detail/quiz_detail";
import QuizAnswer from "../../components/quiz_answer/quiz_answer";
import test_quiz from "../../common/test_quiz/test1";

const Quiz = () => {
  const [quizCounter, setQuizCounter] = useState(0);
  const { title, quiz_data, answer_data } = test_quiz["quizzes"][quizCounter];

  return (
    <section className={styles.quiz}>
      <QuizTitle title={title} />
      <QuizDetail quiz_data={quiz_data} />
      <QuizAnswer answer_data={answer_data} />
    </section>
  );
};

export default Quiz;
