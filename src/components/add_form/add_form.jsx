import React, { useEffect, useState } from "react";
import styles from "./add_form.module.css";
import FormAnswer from "../form_answer/form_answer";
import FormOX from "../form_ox/form_ox";

const AddForm = ({ id, quiz, updateQuiz, FileInput }) => {
  console.log("add form", quiz);
  const { title, imageName } = quiz;
  const [quizType, setQuizType] = useState();
  const [multipleList, setMultipleList] = useState({});

  const onChange = (event) => {
    updateQuiz(id, {
      ...quiz,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onChangeType = (event) => {
    setQuizType(event.target.value);
    updateQuiz(id, {
      ...quiz,
      type: event.target.value,
      multiple: null,
      answer: null,
    });
  };

  const addMultiple = (id) => {
    setMultipleList({
      ...multipleList,
      [id]: "",
    });
  };

  const updateMultiple = (multipleId, value) => {
    setMultipleList({
      ...multipleList,
      [multipleId]: value,
    });
  };

  const updateAnswer = (value) => {
    updateQuiz(id, {
      ...quiz,
      answer: value,
    });
  };

  const updateFile = (file) => {
    updateQuiz(id, {
      ...quiz,
      imageName: file.name,
      imageURL: file.url,
    });
  };

  useEffect(() => {
    /* eslint-disable */
    const updateMultiple = {
      ...quiz,
      multiple: multipleList,
    };
    updateQuiz(id, updateMultiple);
  }, [multipleList]);

  useEffect(() => {
    if (quizType === "multiple") {
      setMultipleList({
        1: "",
        2: "",
      });
    }
  }, [quizType]);

  return (
    <li className={styles.form}>
      <div className={styles.title}>
        <label className={styles.title_label}>문제</label>
        <input
          name="title"
          className={styles.title_input}
          type="text"
          value={title}
          onChange={onChange}
        />
      </div>
      <FileInput imageName={imageName} onFileChange={updateFile} />
      <div className={styles.answer_type} onChange={onChangeType}>
        <label className={styles.type_radio}>
          <input
            className={styles.type_radio}
            type="radio"
            value="multiple"
            name={`answer_${id}`}
          />
          객관식
        </label>
        <label className={styles.type_radio}>
          <input type="radio" value="ox" name={`answer_${id}`} />
          OX
        </label>
      </div>
      {quizType === "multiple" && (
        <FormAnswer
          id={id}
          handleAddMultiple={addMultiple}
          updateMultiple={updateMultiple}
          multipleList={multipleList}
          updateAnswer={updateAnswer}
        />
      )}
      {quizType === "ox" && <FormOX updateAnswer={updateAnswer} />}
    </li>
  );
};

export default AddForm;
