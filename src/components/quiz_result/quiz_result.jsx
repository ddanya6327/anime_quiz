import React from "react";
import styles from "./quiz_result.module.css";

const QuizResult = ({ userAnswer, quizCount, quizzes }) => {
  const answers = quizzes.map((item) => item["answer_data"]["answer"]);
  const scoring = userAnswer.reduce((currentPoint, userAnswer, index) => {
      const checkAnswer = userAnswer === answers[index] ? 1 : 0
      return currentPoint + checkAnswer;
  },0)

  return (
    <section className={styles.result}>
      <h1>채점 결과</h1>
      <ul>
        {userAnswer.map((item, index) => (
          <li>
              <span>{item}</span>
              <span>{item === answers[index] ? "정답" : "오답"}</span>
          </li>
        ))}
      </ul>
        <h3>{scoring}/{quizCount}</h3>
    </section>
  );
};

export default QuizResult;
