import React from "react";
import styles from "./styles.module.css";
import Result from "./Result/Result";

const ViewResults = ({results, handleBack}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{results.name}</h1>
      <div className={styles.test_container}>
          {results.students.map((student)=>{
             return(<Result student={student} key={student.id}/>);
          })}
      </div>
      <button className={styles.button} onClick={handleBack}>Back</button>
    </div>
  );
};

export default ViewResults;
