import React, { useState } from "react";
import styles from "./quiz.module.css";
import QuizTitle from "../../components/quiz_title/quiz_title";
import QuizDetail from "../../components/quiz_detail/quiz_detail";
import QuizAnswer from "../../components/quiz_answer/quiz_answer";
import QuizResult from "../../components/quiz_result/quiz_result";
import Header from "../header/header";
import { useParams } from "react-router-dom";
import test_quiz from "../../common/test_quiz/test1";

const Quiz = () => {
  let { id } = useParams();
  const [currentQuizCounter, setQuizCounter] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [lastQuestion, setLastQuestion] = useState(false);
  const { quizzes } = test_quiz[id - 1];
  const { title, quiz_data, answer_data } = quizzes[currentQuizCounter];
  const quizCount = quizzes.length;

  const handleQuizCounter = () => {
    setQuizCounter(currentQuizCounter + 1);
  };

  const recordUserAnswer = (userSelect) => {
    setUserAnswer([...userAnswer, userSelect]);
  };

  const handleLastQuestion = () => {
    setLastQuestion(true);
  };

  const handleAnswerItem = (e) => {
    const selectQuestion = e.currentTarget.dataset.question;
    recordUserAnswer(selectQuestion);

    if (quizCount - 1 === currentQuizCounter) {
      handleLastQuestion();
    } else {
      handleQuizCounter();
    }
  };

  return (
    <section className={styles.quiz}>
      <Header />
      <div className={styles.content}>
        {lastQuestion ? (
          <QuizResult
            userAnswer={userAnswer}
            quizCount={quizCount}
            quizzes={quizzes}
          />
        ) : (
          <>
            <QuizTitle title={title} />
            <QuizDetail quiz_data={quiz_data} />
            <QuizAnswer
              answer_data={answer_data}
              handleAnswerItem={handleAnswerItem}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Quiz;
