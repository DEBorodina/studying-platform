import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import AnswerForQuestion from "./CreateAnswer/AnswerForQuestion";

const QuestionForTest = ({ question }) => {
  return (
    <div className={styles.form_container}>
      <p>{question.question}</p>
      {question.answers.map((answer) => {
        return <AnswerForQuestion answer={answer} key={answer.id} />;
      })}
    </div>
  );
};

export default QuestionForTest;
