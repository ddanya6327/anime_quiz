import React from "react";
import styles from "./list_item.module.css";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  const { id, quiz_title, thumbnail } = item;
  return (
    <li className={styles.item}>
      <div className={styles.thumbnail}>
        <img className={styles.item_image} src={thumbnail} alt="" />
      </div>
      <p className={styles.title}>{quiz_title}</p>
      <Link to={`/quiz/${id}`}>
        <button className={styles.button}>퀴즈 시작</button>
      </Link>
    </li>
  );
};

export default ListItem;
