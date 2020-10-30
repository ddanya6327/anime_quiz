import React from "react";
import styles from "./quiz_detail.module.css";

const QuizDetail = ({ quiz_data }) => {
  const { imageURL, videoURL } = quiz_data ? quiz_data : {};
  const video = videoURL ? `https://www.youtube.com/embed/${videoURL}` : null;

  return (
    <div className={styles.detail}>
      {imageURL ? (
        <img className={styles.quiz_image} src={imageURL} alt="quiz" />
      ) : (
        <img
          className={styles.quiz_image}
          src="/images/no_images.jpg"
          alt="quiz"
        />
      )}
      {videoURL && (
        // eslint-disable-next-line
        <iframe
          width="100%"
          height="315"
          src={video}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default QuizDetail;
