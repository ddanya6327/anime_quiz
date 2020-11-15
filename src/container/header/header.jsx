import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.section}>
        <Link to={"/"}>
          <img src="/images/logo.png" alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
