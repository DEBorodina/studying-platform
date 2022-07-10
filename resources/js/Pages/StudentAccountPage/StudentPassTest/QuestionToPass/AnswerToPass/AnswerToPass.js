import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const AnswerToPass = ({ answer,handleCheck}) => {
    return (
        <div className={styles.form_container}>
            <p>{answer.answer}</p>
            <div className={styles.inputs}>
                <input
                    type="checkbox"
                    id={answer.id}
                    name="right"
                    onChange={(event)=>{handleCheck(event,answer.id);}}
                />
                <label>Right answer</label>
            </div>
        </div>
    );
};

export default AnswerToPass;
