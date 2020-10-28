import React, { useState } from "react";
import styles from "./add_quiz.module.css";
import Header from "../header/header";
import AddQuizTitle from "../../components/add_quiz_title/add_quiz_title";
import FormList from "../../components/form_list/form_list";
import FormSubmit from "../../components/form_submit/form_submit";
import FormAddButton from "../../components/form_add_button/form_add_button";

const AddQuiz = () => {
  const [quizId, setQuizId] = useState(0);
  const [quizzes, setQuizzes] = useState([]);


  const addForm = () => {
    const newQuizId = quizId + 1;
    setQuizzes([...quizzes, newQuizId]);
    setQuizId(newQuizId);
  };

  const saveQuizzes = () => {
    const quizzesData = quizzes.map((id) => {
      const title = document.querySelector(`#quiz_title_${id}`).value;
      const checkMulti = document.querySelector(`#type_multi_${id}`).checked;
      const checkOX = document.querySelector(`#type_ox_${id}`).checked;
      let type = null;
      let multiple = null;

      if (!checkMulti && !checkOX) {
        alert(`please check quiz type`);
        return;
      }

      if (checkMulti) {
        type = "multi";
        multiple = getMultiple(id);
      } else {
        type = "ox";
      }

      return {
        title: title,
        type: type,
        multiple: multiple,
      };
    });

  };

  const getMultiple = (id) => {
    const multipleNumber = checkMultipleNumber(id);
    const multipleList = [];
    for (let i = 1; i <= multipleNumber; i++) {
      const multipleValue = document.querySelector(`#quiz_${id}_${i}`).value;
      multipleList.push(multipleValue);
    }
    return multipleList;
  };

  const checkMultipleNumber = (id, multipleId = 1) => {
    const multiple = document.querySelector(`#quiz_${id}_${multipleId}`);
    if (multiple) {
      return checkMultipleNumber(id, multipleId + 1);
    } else {
      return multipleId - 1;
    }
  };

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
