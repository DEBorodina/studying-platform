import React from "react";
import TeacherAccount from "./TeacherAccount";
import { useState,useEffect } from "react";
import useInput from "./../../../hooks/useInput";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const TeacherAccounContainer = () => {
  const navigate = useNavigate();
  const [info, changeInfo] = useState({tests:[], name:''});
  useEffect(() => {
      axios
          .get(`http://studying-platform.test/api/teacher`,{
              headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
          })
          .then((response) => {
              changeInfo((state)=>({tests:response.data.tests, name:response.data.name}));
          }).catch((error) => {
          console.log(error.response.data.message);
          if(error.response.data.message==='student'){
              navigate("/student");
          }else{
              navigate("/");
          }
      })
  },[]);
  const handleDelete = (test_id) => {
      axios
          .delete(`http://studying-platform.test/api/teacher/test/delete/${test_id}`,{
              headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
          })
          .then((response) => {
              console.log(response);
              changeInfo((state) => {
                  const indexToDelete = state.tests.findIndex((test) => test.id === test_id);
                  const newTests = [...state.tests];
                  newTests.splice(indexToDelete, 1);
                  const copy = {...state};
                  copy.tests = newTests;
                  return copy;
              });
          }).catch((response) => {})};
  const handleLogOut=()=>{
      axios
          .get(`http://studying-platform.test/api/logout`,{
              headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
          })
          .then((response) => {
              console.log(response);
              localStorage.removeItem('token');
              navigate("/");
          }).catch((response) => {});
  };

  const handleAdd = () =>{
      navigate("/teacher/create-test");
  }
  const handleView = (id) =>{
       navigate(`/teacher/view-test/${id}`);
  }
  const handleViewResults = (id) =>{
       navigate(`/teacher/view-results/${id}`);
  }
  return (
    <div>
      <TeacherAccount name={info.name} tests={info.tests} handleDelete={handleDelete} handleAdd={handleAdd} handleView={handleView}
                      handleViewResults={handleViewResults } handleLogOut={handleLogOut}/>
    </div>
  );
};

export default TeacherAccounContainer;
