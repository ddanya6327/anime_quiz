import React from "react";
import styles from "./quiz_detail.module.css";

const QuizDetail = ({ quiz_data }) => {
  const { type, contents } = quiz_data;
  const videoURL = type === 'video' ? `https://www.youtube.com/embed/${contents}` : null;

  return (
    <div className={styles.detail}>
      {type === "image" && contents.map((content, index) => <img className={styles.quiz_image} key={index} src={content} alt="quiz" />)}
      {videoURL &&
      // eslint-disable-next-line
        <iframe
          width="100%"
          height="315"
          src={videoURL}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      }
    </div>
  );
};

export default QuizDetail;
