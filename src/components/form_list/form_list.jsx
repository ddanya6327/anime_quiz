import React, {useState} from "react";
import styles from "./form_list.module.css";
import AddForm from "../add_form/add_form";

const FormList = ({ quizzes }) => {
  const [form, setForm] = useState({});

  const handleForm = (data) => {
    console.log('data',data);
    setForm(data);
  }
  console.log(form)

  return (
    <ul className={styles.list}>
      {quizzes.map((quizId) => (
        <AddForm form={form} handleForm={handleForm} key={quizId} id={quizId} />
      ))}
    </ul>
  );
};

export default FormList;
