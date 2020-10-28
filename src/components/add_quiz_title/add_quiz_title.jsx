import React from "react";
import styles from "./add_quiz_title.module.css";

const AddQuizTitle = ({ quizTitle, addQuizTitle }) => {
  const onChange = (event) => {
    addQuizTitle(event.currentTarget.value);
  };

  return (
    <input
      className={styles.title}
      value={quizTitle}
      type="text"
      placeholder="퀴즈 제목을 입력해주세요."
      onChange={onChange}
    />
  );
};

export default AddQuizTitle;
