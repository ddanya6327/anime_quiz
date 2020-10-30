import React from "react";
import styles from "./add_quiz_title.module.css";

const AddQuizTitle = ({ quizTitle, addQuizTitle, updateUserName }) => {
  const onChange = (event) => {
    addQuizTitle(event.currentTarget.value);
  };

  const onChangeUserName = (event) => {
    updateUserName(event.currentTarget.value);
  }

  return (
    <>
      <input
        className={styles.title}
        value={quizTitle}
        type="text"
        placeholder="퀴즈 제목을 입력해주세요."
        onChange={onChange}
      />
      <label className={styles.writer}>
        작성자 :
        <input
          className={styles.writer_input}
          type="text"
          onChange={onChangeUserName}
        />
      </label>
    </>
  );
};

export default AddQuizTitle;
