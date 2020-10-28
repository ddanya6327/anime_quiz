import React from "react";
import styles from "./image_input.module.css";

const ImageInput = ({ id }) => {
  return (
    <div className={styles.container}>
      <input
        id={`quiz_img_${id}`}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
      />
    </div>
  );
};

export default ImageInput;
