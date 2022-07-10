import React, {useEffect, useState} from "react";
import styles from "./styles.module.css";
import QuestionForTest from "../CreateTest/CreateQuestion/QuestionForTest";
import {useNavigate,useParams} from "react-router-dom";
import axios from "axios";

const ViewTestContainer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const test_id = params.id;
  const [test,setTest] = useState({'name':'','questions':[]});
  useEffect(() => {
        axios
            .get(`http://studying-platform.test/api/teacher/test/view/${test_id}`,{
                headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
            })
            .then((response) => {
                console.log(response.data);
                setTest((state)=>({questions:response.data.questions, name:response.data.name}));
            }).catch((error) => {
            if(error.response.data.message==='not found' || error.response.data.message==='forbidden'){
                navigate("/teacher");
            }
            else if(error.response.data.message==='student'){
                navigate("/student");
            }else{
                navigate("/");
            }
        })
    },[]);
  const handleBack = () =>{
      navigate("/teacher");
    }
  return (
    <div className={styles.container}>
      <h3 className={styles.card_title}>View test</h3>
      <h3 className={styles.card_title}>{test.name}</h3>
      {test.questions.map((question) => {
        return <QuestionForTest question={question} key={question.id} />;
      })}
      <button className={styles.button} onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default ViewTestContainer;
