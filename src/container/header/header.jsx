import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"}>Header에오.</Link>
    </header>
  );
};

export default Header;
