import React from "react";
import styles from "./styles.module.css";
import Test from "./../Test/Test";
import { Link } from "react-router-dom";

const TeacherAccount = ({ name, tests, handleDelete,handleAdd,handleView,handleViewResults,handleLogOut  }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome, {name}</h1>
      <h3 className={styles.title}>My tests</h3>
      <button className={styles.button} onClick={handleAdd}>Add new</button>
      <div className={styles.test_container}>
        {tests.map((test) => {
          return <Test test={test} handleDelete={handleDelete} key={test.id} handleView={handleView} handleViewResults ={handleViewResults }/>;
        })}
      </div>
      <button className={styles.button} onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default TeacherAccount;
