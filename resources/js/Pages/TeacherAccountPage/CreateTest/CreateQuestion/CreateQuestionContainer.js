import React from "react";
import { useState } from "react";
import axios from "axios";
import CreateQuestion from "./CreateQuestion";

const CreateQuestionContainer = ({ testInfo, setTestInfo }) => {
  const [questionInfo, setQuestionInfo] = useState({
    question: "",
    answers: [],
  });
  const changeQuestionInfo = (event) => {
    let { name, value } = event.target;
    setQuestionInfo((state) => {
      let copy = { ...state };
      copy[name] = value;
      return copy;
    });
  };
  const handleAddQuestion = (event) => {
    event.preventDefault();
    setTestInfo((state) => {
      let copy = { ...state };
      questionInfo.id = Math.trunc(
        Math.random() * (10000000 - 1000000) + 1000000
      );
      copy.questions.push(questionInfo);
      setQuestionInfo((state) => ({ question: "", answers: [] }));
      return copy;
    });
  };
  const handleDelete = (event, id) => {
    event.preventDefault();
    setQuestionInfo((state) => {
      const indexToDelete = state.answers.findIndex(
        (answer) => answer.id === id
      );
      const newTests = [...state.answers];
      newTests.splice(indexToDelete, 1);
      const copy = { ...state };
      copy.answers = newTests;
      return copy;
    });
  };
  return (
    <div>
      <CreateQuestion
        questionInfo={questionInfo}
        setQuestionInfo={setQuestionInfo}
        changeQuestionInfo={changeQuestionInfo}
        handleDelete={handleDelete}
        handleAddQuestion={handleAddQuestion}
      />
    </div>
  );
};

export default CreateQuestionContainer;
