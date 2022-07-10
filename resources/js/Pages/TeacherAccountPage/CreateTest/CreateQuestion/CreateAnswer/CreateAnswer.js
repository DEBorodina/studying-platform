import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const CreateAnswer = ({ info, changeInfo, handleAdd }) => {
  return (
    <div className={styles.form_container}>
      <input
        type="text"
        placeholder="answer"
        className={styles.input}
        value={info.answer}
        onChange={changeInfo}
        name="answer"
      />
      <div className={styles.inputs}>
        <input
          type="checkbox"
          id="rightanswer"
          name="is_right"
          value={1 - info.is_right}
          checked={info.is_right == 1 ? "checked" : ""}
          onChange={changeInfo}
        />
        <label>Right answer</label>
      </div>
      <button className={styles.button} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default CreateAnswer;
