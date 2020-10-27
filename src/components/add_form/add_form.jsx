import React, { useState } from "react";
import styles from "./add_form.module.css";
import ImageInput from "../image_input/image_input";
import FormAnswer from "../form_answer/form_answer";

const AddForm = () => {
  const [answerType, setAnswerType] = useState();

  const onChangeValue = (event) => {
    setAnswerType(event.target.value);
  };
  return (
    <li className={styles.form}>
      <div className={styles.title}>
        <label className={styles.title_label} htmlFor="quiz_title">
          문제
        </label>
        <input className={styles.title_input} type="text" />
      </div>
      <ImageInput />
      <div className={styles.answer_type} onChange={onChangeValue}>
        <label className={styles.type_radio}>
          <input
            className={styles.type_radio}
            type="radio"
            value="multiple"
            name="answer"
          />{" "}
          객관식
        </label>
        <label className={styles.type_radio}>
          <input
            type="radio"
            value="ox"
            name="answer"
          />{" "}
          OX
        </label>
      </div>
      {answerType === "multiple" && <FormAnswer />}
    </li>
  );
};

export default AddForm;
