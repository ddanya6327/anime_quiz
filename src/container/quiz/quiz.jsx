import React, { useEffect, useState } from "react";
import styles from "./quiz.module.css";
import QuizTitle from "../../components/quiz_title/quiz_title";
import QuizDetail from "../../components/quiz_detail/quiz_detail";
import QuizAnswer from "../../components/quiz_answer/quiz_answer";
import QuizResult from "../../components/quiz_result/quiz_result";
import Header from "../header/header";
import { useParams } from "react-router-dom";

const Quiz = ({ quizRepository }) => {
  const { id } = useParams();
  const [quizData, setQuizData] = useState({});
  const [lastQuiz, setLastQuiz] = useState(10);
  const [currentQuizCounter, setQuizCounter] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  const { quizzes } = quizData;

  useEffect(() => {
    quizRepository.getQuiz(id, setQuizData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!Object.keys(quizData).length) return;
    setLastQuiz(quizzes.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizData]);

  const handleAnswerItem = (e) => {
    const selectQuestion = e.currentTarget.innerHTML;
    recordUserAnswer(selectQuestion);
    handleQuizCounter();
  };

  const recordUserAnswer = (userSelect) => {
    setUserAnswer([...userAnswer, userSelect]);
  };

  const handleQuizCounter = () => {
    setQuizCounter(currentQuizCounter + 1);
  };

  return (
    <section className={styles.quiz}>
      <Header />
      <div className={styles.content}>
        {quizzes &&
          (lastQuiz === currentQuizCounter ? (
            <QuizResult
              quizzes={quizzes}
              userAnswer={userAnswer}
              quizCount={currentQuizCounter}
            />
          ) : (
            <>
              <QuizTitle title={quizzes[currentQuizCounter]} />
              <QuizDetail quiz_data={quizzes[currentQuizCounter]} />
              <QuizAnswer
                quiz_data={quizzes[currentQuizCounter]}
                handleAnswerItem={handleAnswerItem}
              />
            </>
          ))}
        {!quizzes && "Loading.."}
      </div>
    </section>
  );
};

export default Quiz;
