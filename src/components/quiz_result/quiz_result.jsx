import React from "react";
import styles from "./quiz_result.module.css";
import { Link } from "react-router-dom";

const QuizResult = ({ userAnswer, quizCount, quizzes }) => {
  const answers = quizzes.map((item) => item["answer"]);
  const scoring = userAnswer.reduce((currentPoint, userAnswer, index) => {
    const checkAnswer = userAnswer === answers[index] ? 1 : 0;
    return currentPoint + checkAnswer;
  }, 0);

  return (
    <section className={styles.result}>
      <h1 className={styles.title}>채점 결과</h1>
      <ul className={styles.answer_list}>
        {userAnswer.map((item, index) => (
          <li className={styles.answer_item} key={index}>
            <span className={styles.user_answer}>{item}</span>
            <span className={styles.answer_result}>
              {item === answers[index] ? "O" : "X"}
            </span>
          </li>
        ))}
      </ul>
      <h3 className={styles.score}>
        {scoring}/{quizCount}
      </h3>
      <Link to={"/list"}>
        <button className={styles.backButton}>메인으로</button>
      </Link>
    </section>
  );
};

export default QuizResult;
