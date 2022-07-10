import React, {useState} from "react";
import useInput from "./../../hooks/useInput";
import axios from "axios";
import AuthorizationPage from "./AuthorizationPage";
import { useNavigate } from "react-router-dom";

const AuthorizationPageContainer = () => {
    const [inputValue, changeInputValue] = useInput({name:'',last_name:"",middle_name:"",email:"",password:"",role:""});
    const [errors,setErrors] = useState('');
    const navigate = useNavigate();
    const register = (event) => {
        event.preventDefault();
        axios
            .post("http://studying-platform.test/api/register", inputValue)
            .then((response) => {
                if(response.data.token){
                    localStorage.setItem('token',response.data.token);
                    if(response.data.user.role==="2"){
                        navigate("/teacher");
                    }else if(response.data.user.role==="3"){
                        navigate("/student");
                    }
                }else{
                    const message = response.data.message;
                    setErrors((state) => message);
                }
            })
            .catch((error)=>
            {const message  = error.response.data.errors;
             setErrors((state) => {
                 let copy = '';
                 for(let error in message){
                    copy = message[error];
                    break;
                 }
                 return copy;
             });
        });
        return true;
    }

    return (
        <div>
            <AuthorizationPage inputValue={inputValue} changeInputValue={changeInputValue} register={register} errors={errors}/>
        </div>
    );
};

export default AuthorizationPageContainer ;
