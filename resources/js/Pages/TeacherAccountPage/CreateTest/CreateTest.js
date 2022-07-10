import React from "react";
import styles from "./styles.module.css";
import Test from "./../Test/Test";
import { Link } from "react-router-dom";
import CreateQuestionContainer from "./CreateQuestion/CreateQuestionContainer";
import Question from "./CreateQuestion/Question";

const CreateTest = ({
  testInfo,
  setTestInfo,
  handleDeleteQuestion,
  changeTestInfo,
  handleSave,
  handleCancel,
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.card_title}>Create test</h3>
      <div className={styles.form_container}>
        <input
          type="text"
          placeholder="name"
          className={styles.input}
          value={testInfo.name}
          onChange={changeTestInfo}
          name="name"
        />
        {testInfo.questions.map((question) => {
          return (
            <Question
              question={question}
              key={question.id}
              handleDeleteQuestion={handleDeleteQuestion}
            />
          );
        })}
        <CreateQuestionContainer
          testInfo={testInfo}
          setTestInfo={setTestInfo}
        />
        <button className={styles.button} onClick={handleSave}>
          Done
        </button>
        <button className={styles.button} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CreateTest;
