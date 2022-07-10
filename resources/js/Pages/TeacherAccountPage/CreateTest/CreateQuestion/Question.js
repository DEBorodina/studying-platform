import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import AnswerForQuestion from "./CreateAnswer/AnswerForQuestion";

const Question = ({ question, handleDeleteQuestion }) => {
  return (
    <div className={styles.form_container}>
      <p>{question.question}</p>
      {question.answers.map((answer) => {
        return <AnswerForQuestion answer={answer} key={answer.id} />;
      })}
      <button className={styles.button} onClick={handleDeleteQuestion}>
        Delete
      </button>
    </div>
  );
};

export default Question;
