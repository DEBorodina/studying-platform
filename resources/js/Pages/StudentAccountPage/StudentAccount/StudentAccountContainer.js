import React, {useEffect} from "react";
import StudentAccount from "./StudentAccount";
import { useState } from "react";
import useInput from "./../../../hooks/useInput";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const StudentAccountContainer = () => {
    const navigate = useNavigate();
    const [info, changeInfo] = useState({results:[], name:''});
    useEffect(() => {
        axios
            .get(`http://studying-platform.test/api/student`,{
                headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
            })
            .then((response) => {
                if(sessionStorage.getItem('code')){
                    navigate(`/student/test/${sessionStorage.getItem('code')}`);
                }else {
                    changeInfo((state) => ({results: response.data.results, name: response.data.name}));
                }
            })
            .catch((error) => {
                console.log(error.response.data.message);
                if(error.response.data.message==='teacher'){
                    navigate("/teacher");
                }else{
                    navigate("/");
                }
    })},[]);
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
  return (
    <div>
      <StudentAccount info={info} handleLogOut={handleLogOut}/>
    </div>
  );
};

export default StudentAccountContainer;
