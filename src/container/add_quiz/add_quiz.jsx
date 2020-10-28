import React, {useEffect, useState} from "react";
import styles from "./add_quiz.module.css";
import Header from "../header/header";
import AddQuizTitle from "../../components/add_quiz_title/add_quiz_title";
import FormList from "../../components/form_list/form_list";
import FormSubmit from "../../components/form_submit/form_submit";
import FormAddButton from "../../components/form_add_button/form_add_button";

const AddQuiz = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizzes, setQuizzes] = useState({});
  const [quizId, setQuizId] = useState(1);

  const addQuizTitle = (value) => {
    setQuizTitle(value);
  }

  const addQuiz = (quiz) => {
    setQuizzes({
      ...quizzes,
      [quizId]: quiz
    })
    setQuizId(quizId + 1);
  }

  const updateQuiz = (id, quiz) => {
    setQuizzes({
      ...quizzes,
      [id]: quiz
    })
  }

  const saveQuiz = () => {
    const quizData = {
      title: quizTitle,
      created_at: Date.now(),
      user_name: 'test',
      quizzes: quizzes,
    }
  }

  return (
    <section className={styles.add_quiz}>
      <Header />
      <div className={styles.main}>
        <AddQuizTitle quizTitle={quizTitle} addQuizTitle={addQuizTitle} />
        <FormList quizzes={quizzes} updateQuiz={updateQuiz} />
        <FormAddButton addQuiz={addQuiz} />
        <FormSubmit saveQuiz={saveQuiz} />
      </div>
    </section>
  );
};

export default AddQuiz;
