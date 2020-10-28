import React, { useRef, useState } from "react";
import styles from "./form_answer.module.css";

const FormAnswer = ({ id, updateMultiple, updateAnswer }) => {
  const [multipleId, setMultipleId] = useState(3);
  const [multipleList, setMultipleList] = useState({ 1: "", 2: "" });
  const [answerId, setAnswerId] = useState();

  const addMultiple = () => {
    setMultipleList({
      ...multipleList,
      [multipleId]: "",
    });
    setMultipleId(multipleId + 1);
  };

  const onChange = (event) => {
    setMultipleList({
      ...multipleList,
      [event.currentTarget.dataset.id]: event.currentTarget.value,
    });
    updateMultiple(multipleList);
    updateAnswer(null);
    setAnswerId(null);
  };

  const selectAnswer = (event) => {
    updateAnswer(event.currentTarget.innerText);
    setAnswerId(event.currentTarget.dataset.id);
  };

  return (
    <div className={styles.form}>
      <div className={styles.multiple}>
        {Object.keys(multipleList).map((key) => {
          return (
            <input
              key={key}
              data-id={key}
              className={styles.answer}
              type="text"
              onChange={onChange}
            />
          );
        })}
      </div>
      <button className={styles.submit} onClick={addMultiple}>
        항목추가
      </button>
      <div className={styles.answer_list}>
        <h4>정답</h4>
        {Object.keys(multipleList).map(
          (key) =>
            multipleList[key] && (
              <button
                key={key}
                className={`${styles.answer_button} ${
                  answerId === key ? styles.selected : ""
                }`}
                onClick={selectAnswer}
                data-id={key}
              >
                {multipleList[key]}
              </button>
            )
        )}
      </div>
    </div>
  );
};

export default FormAnswer;
