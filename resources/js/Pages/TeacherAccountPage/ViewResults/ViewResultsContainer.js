import React, {useEffect} from "react";
import { useState } from "react";
import useInput from "./../../../hooks/useInput";
import axios from "axios";
import ViewResults from "./ViewResults";
import {useNavigate, useParams} from "react-router-dom";

const ViewResultsContainer = () => {
    const params = useParams();
    const navigate = useNavigate();
    const test_id = params.id;
    const [results,setResults] = useState({'students':[],'name':""});
    useEffect(() => {
        axios
            .get(`http://studying-platform.test/api/teacher/test/results/${test_id}`,{
                headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
            })
            .then((response) => {
                console.log(response.data);
                setResults((state)=>({students:response.data.students,name:response.data.name}));
            }).catch((error) => {
            console.log(error.response.data.message);
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
    <div>
      <ViewResults results={results} handleBack={handleBack}/>
    </div>
  );
};

export default ViewResultsContainer;
