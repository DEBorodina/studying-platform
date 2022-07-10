import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import CreateAnswerContainer from "./CreateAnswer/CreateAnswerContainer";
import Answer from "./CreateAnswer/Answer";

const CreateQuestion = ({
  questionInfo,
  changeQuestionInfo,
  handleDelete,
  setQuestionInfo,
  handleAddQuestion,
}) => {
  return (
    <div className={styles.form_container}>
      <input
        type="text"
        placeholder="question"
        className={styles.input}
        value={questionInfo.question}
        onChange={changeQuestionInfo}
        name="question"
      />
      {questionInfo.answers.map((answer) => {
        return (
          <Answer answer={answer} key={answer.id} handleDelete={handleDelete} />
        );
      })}
      <CreateAnswerContainer
        questionInfo={questionInfo}
        setQuestionInfo={setQuestionInfo}
        changeQuestionInfo={changeQuestionInfo}
      />
      <div className={styles.test_container}></div>
      <button className={styles.button} onClick={handleAddQuestion}>
        Add
      </button>
    </div>
  );
};

export default CreateQuestion;
