import React, { useRef, useState } from "react";
import styles from "./image_input.module.css";

const ImageInput = ({ imageUploader, imageName, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${
            imageName ? styles.black : styles.white
          }`}
          onClick={onButtonClick}
        >
          {imageName ? `${imageName} 업로드 완료!` : "이미지 첨부하기"}
        </button>
      )}
      {loading && <div className={styles.loading}> </div>}
    </div>
  );
};

export default ImageInput;
