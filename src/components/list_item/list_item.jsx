import React from "react";
import styles from "./list_item.module.css";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  const { id, title, quizzes } = item;
  const thumbnail = quizzes[1].imageURL;

  return (
    <li className={styles.item}>
      <div className={styles.thumbnail}>
        <img
          className={styles.item_image}
          src={thumbnail ? thumbnail : "/images/no_images.jpg"}
          alt=""
        />
      </div>
      <p className={styles.title}>{title}</p>
      <div>
        <Link to={`/quiz/${id}`}>
          <button className={styles.button}>퀴즈 시작</button>
        </Link>
      </div>
    </li>
  );
};

export default ListItem;
