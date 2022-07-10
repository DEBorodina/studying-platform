import React, {useEffect} from "react";
import { useState } from "react";
import CreateTest from "./CreateTest";
import { useNavigate } from "react-router-dom";
import useInput from "./../../../hooks/useInput";
import axios from "axios";

const CreateTestContainer = () => {
    useEffect(() => {
        axios
            .get(`http://studying-platform.test/api/teacher`,{
                headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
            })
            .then((response) => {
            }).catch((error) => {
            console.log(error.response.data.message);
            if(error.response.data.message==='student'){
                navigate("/student");
            }else{
                navigate("/");
            }
        })
    },[]);
  const [testInfo, setTestInfo] = useState({
    name: "",
    questions: [],
  });
  const changeTestInfo = (event) => {
    let { name, value } = event.target;
    setTestInfo((state) => {
      let copy = { ...state };
      copy[name] = value;
      return copy;
    });
  };
  const handleDeleteQuestion = (event, id) => {
    event.preventDefault();
    setTestInfo((state) => {
      const indexToDelete = state.questions.findIndex(
        (question) => question.id === id
      );
      const newTests = [...state.questions];
      newTests.splice(indexToDelete, 1);
      const copy = { ...state };
      copy.questions = newTests;
      return copy;
    });
  };
  const navigate = useNavigate();
  const handleSave = () => {
      axios
          .post(`http://studying-platform.test/api/teacher/test/create`,testInfo,{
              headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
          })
          .then((response) => {
              navigate("/teacher");
          }).catch((response) => {
      })
  };
  const handleCancel = () => {
    navigate("/teacher");
  };
  return (
    <div>
      <CreateTest
        testInfo={testInfo}
        setTestInfo={setTestInfo}
        handleDeleteQuestion={handleDeleteQuestion}
        changeTestInfo={changeTestInfo}
        handleSave={handleSave}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default CreateTestContainer;
