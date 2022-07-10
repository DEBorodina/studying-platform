import React, {useState} from "react";
import StartingPage from "./StartingPage";
import useInput from "./../../hooks/useInput";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const StartingPageContainer = () => {
  const [inputValue, changeInputValue] = useInput({email:'',password:""});
  const [errors,setErrors] = useState('');
  const navigate = useNavigate();
  const login = (event) => {
      event.preventDefault();
    axios
      .post("http://studying-platform.test/api/login", inputValue)
      .then((response) => {
          if(response.data.token){
              localStorage.setItem('token',response.data.token);
              console.log(response.data.user);
              if(response.data.user.role==="2"){
                  navigate("/teacher");
              }else if(response.data.user.role==="3"){
                  navigate("/student");
              }
          }else {
              const message = response.data.message;
              setErrors((state) => message);
          }
      }).catch((error)=>
        {const message  = error.response.data.errors;
        setErrors((state) => {
            let copy = '';
            for(let error in message){
                copy = message[error];
                break;
            }
            return copy;
        });
      })
  };
  return (
    <div>
      <StartingPage inputValue={inputValue} changeInputValue={changeInputValue} login={login} errors={errors}/>
    </div>
  );
};

export default StartingPageContainer;
