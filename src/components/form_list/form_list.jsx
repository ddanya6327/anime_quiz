import React from "react";
import styles from "./form_list.module.css";
import AddForm from "../add_form/add_form";

const FormList = () => {
  return <div className={styles.list}>
      <AddForm />
      <AddForm />
  </div>;
};

export default FormList;
