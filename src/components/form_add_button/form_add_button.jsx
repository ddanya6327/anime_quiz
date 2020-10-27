import React from "react";
import styles from "./form_add_button.module.css";

const FormAddButton = ({ addForm }) => {
  return (
    <div className={styles.add_button} onClick={addForm}>
      <div className={styles.plus}>+</div>
    </div>
  );
};

export default FormAddButton;
