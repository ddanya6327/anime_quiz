import React from "react";
import styles from "./form_list.module.css";
import AddForm from "../add_form/add_form";

const FormList = ({ quizzes, updateQuiz, FileInput }) => {
  return (
    <ul className={styles.list}>
      {Object.keys(quizzes).map((key) => (
        <AddForm
          key={key}
          id={key}
          quiz={quizzes[key]}
          updateQuiz={updateQuiz}
          FileInput={FileInput}
        />
      ))}
    </ul>
  );
};

export default FormList;
