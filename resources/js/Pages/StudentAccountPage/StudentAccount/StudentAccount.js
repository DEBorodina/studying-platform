import React from "react";
import styles from "./styles.module.css";
import StudentTest from "./../StudentTest/StudentTest";
import { Link } from "react-router-dom";

const StudentAccount = ({info,handleLogOut}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome, {info.name}</h1>
      <h3 className={styles.title}>My tests</h3>
      <div className={styles.test_container}>
          {info.results.map((result)=>{
              return(<StudentTest result={result} key={result.id}/>)
          })}
      </div>
      <button className={styles.button} onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default StudentAccount;
