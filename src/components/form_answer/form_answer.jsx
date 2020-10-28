import React, { useRef, useState } from "react";
import styles from "./form_answer.module.css";

const FormAnswer = ({
  updateMultiple,
  multipleList,
  handleAddMultiple,
  updateAnswer,
}) => {
  const [multipleId, setMultipleId] = useState(3);
  const [answer, setAnswer] = useState();

  const addMultiple = () => {
    handleAddMultiple(multipleId);
    setMultipleId(multipleId + 1);
  };

  const onChangeInput = (event) => {
    const id = event.currentTarget.dataset.id;
    const value = event.currentTarget.value;
    updateMultiple(id, value);
  };

  const selectAnswer = (event) => {
    const answer = event.currentTarget.innerText;
    setAnswer(answer);
    updateAnswer(answer);
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
              onChange={onChangeInput}
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
                  answer === multipleList[key] ? styles.selected : ""
                }`}
                onClick={selectAnswer}
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
