import React, {useEffect} from "react";
import styles from "./form_add_button.module.css";

const FormAddButton = ({ addQuiz }) => {
  const addForm = () => {
    const form = {
      title: "",
      imageName: "",
      imageURL: "",
      type: null,
      multiple: null,
      answer: null,
      errors: [],
    };
    addQuiz(form);
  };

  useEffect(() => {
    addForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.add_button} onClick={addForm}>
      <div className={styles.plus}>+</div>
    </div>
  );
};

export default FormAddButton;
