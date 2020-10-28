import React, { useState } from "react";
import styles from "./add_quiz.module.css";
import Header from "../header/header";
import AddQuizTitle from "../../components/add_quiz_title/add_quiz_title";
import FormList from "../../components/form_list/form_list";
import FormSubmit from "../../components/form_submit/form_submit";
import FormAddButton from "../../components/form_add_button/form_add_button";

const AddQuiz = () => {
  const test = {
    1: {
      "title": "이 퀴즈는?",
      "imageFile": "ImageFile",
      "imageURL": "abc",
      "type": "ox",
      "multiple": null,
      "answer": "o",
    }
  }
  const [quizzes, setQuizzes] = useState(test);
  const [quizId, setQuizId] = useState(2);
  console.log(quizzes)

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

  return (
    <section className={styles.add_quiz}>
      <Header />
      <div className={styles.main}>
        <AddQuizTitle />
        <FormList quizzes={quizzes} updateQuiz={updateQuiz} />
        <FormAddButton addQuiz={addQuiz} />
        <FormSubmit />
      </div>
    </section>
  );
};

export default AddQuiz;
