import React, {useState} from "react";
import styles from "./add_quiz.module.css";
import Header from "../header/header";
import AddQuizTitle from "../../components/add_quiz_title/add_quiz_title";
import FormList from "../../components/form_list/form_list";
import FormSubmit from "../../components/form_submit/form_submit";
import FormAddButton from "../../components/form_add_button/form_add_button";

const AddQuiz = () => {
    const [quizzes, setQuizzes] = useState({});
    console.log(quizzes)

    const addForm = () => {
        console.log('add quiz');
    }

    const saveQuizzes = () => {
        console.log('save quiz');
    }

  return (
    <section className={styles.add_quiz}>
      <Header />
      <div className={styles.main}>
        <AddQuizTitle />
        <FormList quizzes={quizzes} />
        <FormAddButton addForm={addForm} />
        <FormSubmit saveQuizzes={saveQuizzes} />
      </div>
    </section>
  );
};

export default AddQuiz;
