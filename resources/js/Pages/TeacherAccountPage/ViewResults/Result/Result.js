import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Result = ({student}) => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h3 className={styles.code}>{student.last_name}</h3>
        <h3 className={styles.code}>{student.name}</h3>
        <h3 className={styles.code}>{student.middle_name}</h3>
      </div>
      <h3 className={styles.code}>{student.score}%</h3>
    </div>
  );
};

export default Result;
