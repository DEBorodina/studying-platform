import React from "react";
import styles from "./styles.module.css";

import AnswerToPass from "./AnswerToPass/AnswerToPass";

const QuestionForTest = ({ question,handleCheck}) => {
    return (
        <div className={styles.form_container}>
            <p>{question.question}</p>
            {question.answers.map((answer) => {
                return <AnswerToPass answer={answer} key={answer.id} handleCheck={handleCheck}/>;
            })}
        </div>
    );
};

export default QuestionForTest;
