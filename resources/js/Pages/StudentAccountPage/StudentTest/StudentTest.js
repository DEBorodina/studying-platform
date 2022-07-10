import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const StudentTest = ({result}) => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h3 className={styles.title}>{result.name}</h3>
        <p className={styles.code}>{`${result.teacher.last_name} ${result.teacher.name} ${result.teacher.middle_name}`}</p>
      </div>
      <p className={styles.title}>{result.score}</p>
    </div>
  );
};

export default StudentTest;
