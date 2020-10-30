import React from "react";
import styles from "./quiz_answer.module.css";
import AnswerItem from "../answer_item/answer_item";
import AnswerOx from "../answer_ox/answer_ox";

const QuizAnswer = ({ quiz_data, handleAnswerItem }) => {
  const { multiple, type } = quiz_data ? quiz_data : {};

  return (
    <div className={styles.answer}>
      <ul className={styles.answer_list}>
        {type === "multiple" &&
          multiple.map((item, index) => (
            <AnswerItem
              key={index}
              value={item}
              handleAnswerItem={handleAnswerItem}
            />
          ))}
        {type === "ox" && <AnswerOx handleAnswerItem={handleAnswerItem} />}
        {type === "oo" && (
          <AnswerOx handleAnswerItem={handleAnswerItem} hidden />
        )}
      </ul>
    </div>
  );
};

export default QuizAnswer;
