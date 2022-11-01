import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.link}>
        Quiz
      </Link>
      <Link to="/user" className={styles.link}>
        User
      </Link>
      <Link to="/admin" className={styles.link}>
        Admin
      </Link>
    </div>
  );
};
