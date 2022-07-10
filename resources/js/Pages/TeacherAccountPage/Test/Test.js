import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Test = ({ test, handleDelete,handleView,handleViewResults}) => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h3 className={styles.title}>{test.name}</h3>
          <h3 className={styles.code}>{'http://studying-platform.test/student/test/'+test.code}</h3>
      </div>
      <div className={styles.button_container}>
        <button className={styles.button} onClick={()=>{handleViewResults(test.id)}}>results</button>
        <button
          className={styles.button}
          onClick={() => {
            handleDelete(test.id);
          }}
        >
          delete
        </button>
        <button className={styles.button} onClick={()=>{handleView(test.id)}}>view</button>
      </div>
    </div>
  );
};

export default Test;
