import React from "react";
import styles from "./add_quiz_title.module.css";

const AddQuizTitle = ({ quizTitle, addQuizTitle, updateUserName }) => {
  const onChange = (event) => {
    addQuizTitle(event.currentTarget.value);
  };

  const onChangeUserName = (event) => {
    updateUserName(event.currentTarget.value);
  };

  return (
    <>
      <input
        className={styles.title}
        value={quizTitle}
        type="text"
        placeholder="クイズタイトルを入力してください"
        onChange={onChange}
      />
      <label className={styles.writer}>
        投稿者 :
        <input
          className={styles.writer_input}
          type="text"
          placeholder="投稿者を入力してください"
          onChange={onChangeUserName}
        />
      </label>
    </>
  );
};

export default AddQuizTitle;
