import React, { useState } from "react";
import styles from "./add_form.module.css";
import ImageInput from "../image_input/image_input";
import FormAnswer from "../form_answer/form_answer";

const AddForm = ({ id, form, handleForm }) => {
  const [answerType, setAnswerType] = useState();

  const onChangeType = (event) => {
    setAnswerType(event.target.value);
    handleForm({
      ...form,
      type: event.target.value,
      multiple: null,
      answer: null,
    });
  };

  const onChange = (event) => {
    console.log('onchange');
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    handleForm({
      ...form,
      [name]: value,
    });
  };

  const updateMultiple = (multiple) => {
    console.log('updateMultiple');
    handleForm({
      ...form,
      multiple: multiple,
    });
    console.log('updateMultiple');
  };

  const updateAnswer = (answer) => {
    console.log('updateAnswer');
    console.log('answer',form)
    handleForm(() => ({
      ...form,
      answer: answer,
    }));
  }

  return (
    <li className={styles.form}>
      <div className={styles.title}>
        <label className={styles.title_label}>문제</label>
        <input
          name="title"
          className={styles.title_input}
          type="text"
          onChange={onChange}
        />
      </div>
      <ImageInput id={id} />
      <div className={styles.answer_type} onChange={onChangeType}>
        <label className={styles.type_radio}>
          <input
            id={`type_multi_${id}`}
            className={styles.type_radio}
            type="radio"
            value="multiple"
            name={`answer_${id}`}
          />
          객관식
        </label>
        <label className={styles.type_radio}>
          <input
            id={`type_ox_${id}`}
            type="radio"
            value="ox"
            name={`answer_${id}`}
          />
          OX
        </label>
      </div>
      {answerType === "multiple" && (
        <FormAnswer id={id} updateMultiple={updateMultiple} updateAnswer={updateAnswer} />
      )}
      {answerType === "ox" && "으어뚠어뚠"}
    </li>
  );
};

export default AddForm;
