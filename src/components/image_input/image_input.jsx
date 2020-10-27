import React from "react";
import styles from "./image_input.module.css";

const ImageInput = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
      />
    </div>
  );
};

export default ImageInput;
