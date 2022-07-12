import React, {useEffect, useState} from "react";
import styles from "./styles.module.css";
import {useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import QuestionToPass from "./QuestionToPass/QuestionToPass";

const StudentPassTestContainer = () => {
    const params = useParams();
    const navigate = useNavigate();
    const code = params.code;
    const [test,setTest] = useState({'name':'','questions':[]});
    const [checkedAnswers,setCheckedAnswers]=useState([]);
    const handleCheck = (event,id) =>{
        setCheckedAnswers((state)=>{
            let copy = [...state];
            if(event.target.checked){
                copy.push(id);
            }else{
                const indexToDelete = copy.indexOf(id);
                copy.splice(indexToDelete,1);
            }
            return copy;
        })
    }
    useEffect(() => {
        sessionStorage.removeItem('code');
        axios
            .get(`http://studying-platform.test/api/student/test/${code}`,{
                headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
            })
            .then((response) => {
                    setTest((state)=>({questions:response.data.questions, name:response.data.name}));
            }).catch((error) => {
                console.log(error.response.data);
                if(error.response.data.message==='not found' || error.response.data.message==='already been passed'){
                    navigate("/student");
                }
                else if(error.response.data.message==='teacher'){
                    navigate("/teacher");
                }else{
                    sessionStorage.setItem('code',code);
                   navigate("/");
               }
        })
    },[]);
    const handleDone = () =>{
        axios
            .post(`http://studying-platform.test/api/student/test/check/${code}`,{test:test,answers:checkedAnswers},
                {headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
            })
            .then((response) => {
                console.log(response);
                navigate("/student");
            }).catch((response) => {
                console.log(response);
           navigate("/student");
        })
    }
    return (
        <div className={styles.container}>
           <h3 className={styles.card_title}>Test</h3>
            <h3 className={styles.card_title}>{test.name}</h3>
            {test.questions.map((question) => {
                return <QuestionToPass question={question} key={question.id} handleCheck={handleCheck}/>;
            })}
            <button className={styles.button} onClick={handleDone}>
                Done
            </button>
        </div>
    );
};

export default StudentPassTestContainer;
