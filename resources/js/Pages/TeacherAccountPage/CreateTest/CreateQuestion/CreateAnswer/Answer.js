import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Answer = ({ answer, handleDelete }) => {
  console.log(answer);
  return (
    <div className={styles.form_container}>
      <p>{answer.answer}</p>
      <div className={styles.inputs}>
        <input
          type="checkbox"
          id="rightanswer"
          name="right"
          disabled
          checked={answer.is_right ? "checked" : ""}
        />
        <label>Right answer</label>
      </div>
      <button
        className={styles.button}
        onClick={(event) => {
          handleDelete(event, answer.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Answer;
