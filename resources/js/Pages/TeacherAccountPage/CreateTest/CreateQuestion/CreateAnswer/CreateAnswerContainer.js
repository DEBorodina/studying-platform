import React from "react";
import { useState } from "react";
import axios from "axios";
import CreateAnswer from "./CreateAnswer";

const CreateAnswerContainer = ({
  changeQuestionInfo,
  questionInfo,
  setQuestionInfo,
}) => {
  const [info, setInfo] = useState({ answer: "", is_right: 0 });
  const changeInfo = (event) => {
    let { name, value } = event.target;
    setInfo((state) => {
      let copy = { ...state };
      copy[name] = value;
      console.log(copy);
      return copy;
    });
  };
  const handleAdd = (event) => {
    event.preventDefault();
    setQuestionInfo((state) => {
      let copy = { ...state };
      info.id = Math.trunc(Math.random() * (10000000 - 1000000) + 1000000);
      copy.answers.push(info);
      setInfo((state) => ({ answer: "", is_right: 0 }));
      return copy;
    });
  };
  return (
    <div>
      <CreateAnswer info={info} changeInfo={changeInfo} handleAdd={handleAdd} />
    </div>
  );
};

export default CreateAnswerContainer;
