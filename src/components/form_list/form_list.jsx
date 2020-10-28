import React, {useState} from "react";
import styles from "./form_list.module.css";
import AddForm from "../add_form/add_form";

const FormList = ({quizzes,updateQuiz}) => {
  return (
    <ul className={styles.list}>
      {Object.keys(quizzes).map((key) => (
        <AddForm key={key} id={key} quiz={quizzes[key]} updateQuiz={updateQuiz} />
      ))}
    </ul>
  );
};

export default FormList;
