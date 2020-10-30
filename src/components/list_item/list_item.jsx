import React from "react";
import styles from "./list_item.module.css";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  const { id, title, quizzes, user_name } = item;
  const thumbnail = quizzes[0] ? quizzes[0].imageURL : "/images/no_images.jpg";

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
      <p className={styles.user_name}>{user_name}</p>
      <div>
        <Link to={`/quiz/${id}`}>
          <button className={styles.button}>퀴즈 시작</button>
        </Link>
      </div>
    </li>
  );
};

export default ListItem;
