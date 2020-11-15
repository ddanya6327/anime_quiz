import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./add_quiz.module.css";
import Header from "../header/header";
import AddQuizTitle from "../../components/add_quiz_title/add_quiz_title";
import FormList from "../../components/form_list/form_list";
import FormSubmit from "../../components/form_submit/form_submit";
import FormAddButton from "../../components/form_add_button/form_add_button";
import Errors from "../../components/add_errors/errors";

const AddQuiz = ({ FileInput, quizRepository }) => {
  const [quizTitle, setQuizTitle] = useState("");
  const [quizzes, setQuizzes] = useState({});
  const [quizId, setQuizId] = useState(0);
  const [userName, setUserName] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const addQuizTitle = (value) => {
    setQuizTitle(value);
  };

  const updateUserName = (value) => {
    setUserName(value);
  };

  const addQuiz = (quiz) => {
    setQuizzes({
      ...quizzes,
      [quizId]: quiz,
    });
    setQuizId(quizId + 1);
  };

  const updateQuiz = (id, quiz) => {
    setQuizzes({
      ...quizzes,
      [id]: quiz,
    });
  };

  const deleteQuiz = (id) => {
    setQuizzes(() => {
      const quizzesCopy = { ...quizzes };
      delete quizzesCopy[id];
      return quizzesCopy;
    });
  };

  const saveQuiz = async () => {
    if (formValidate()) {
      return;
    }

    const quizData = {
      id: Date.now(),
      title: quizTitle,
      created_at: Date.now(),
      user_name: userName,
      quizzes: quizzes,
    };
    await quizRepository.saveQuiz(quizData);
    history.push("/");
  };

  const formValidate = () => {
    const errors = [];

    if (!quizTitle) {
      errors.push("Quiz Title");
    }
    if (!userName) {
      errors.push("User Name");
    }

    const quizKeys = Object.keys(quizzes);
    const updateQuizzes = { ...quizzes };

    quizKeys.forEach((key) => {
      const { title, answer, type, multiple } = quizzes[key];
      const formErrors = [];

      if (!title) {
        formErrors.push("title");
      }
      if (!type) {
        formErrors.push("type");
      }

      if (type && type === "multiple") {
        const multipleKeys = Object.keys(multiple);
        let error = false;
        multipleKeys.forEach((key) => {
          if (!multiple[key]) {
            error = true;
          }
        });
        if (error) {
          formErrors.push("multiple");
        }
      }

      if (!answer) {
        formErrors.push("answer");
      }

      updateQuizzes[key]["errors"] = formErrors;
      if (formErrors.length > 0 && !errors.includes("form")) {
        errors.push("form");
      }
    });
    setQuizzes(updateQuizzes);
    setErrors(errors);
    return errors.length > 0;
  };

  return (
    <section className={styles.add_quiz}>
      <Header />
      <div className={styles.main}>
        {errors.length > 0 && <Errors errors={errors} />}
        <AddQuizTitle
          quizTitle={quizTitle}
          addQuizTitle={addQuizTitle}
          updateUserName={updateUserName}
        />
        <FormList
          quizzes={quizzes}
          updateQuiz={updateQuiz}
          deleteQuiz={deleteQuiz}
          FileInput={FileInput}
        />
        <FormAddButton addQuiz={addQuiz} />
        <FormSubmit saveQuiz={saveQuiz} />
      </div>
    </section>
  );
};

export default AddQuiz;
