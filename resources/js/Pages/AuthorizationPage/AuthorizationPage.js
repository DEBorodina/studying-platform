import React from "react";
import styles from "./styles.module.css";

const AuthorizationPage = ({inputValue,changeInputValue,register,errors}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Authorization</h1>
        <p className={styles.error}>{errors}</p>
      <form method="post" className={styles.card_login_container} onSubmit={register}>
        <p className={styles.text}>Name</p>
        <input
          type="text"
          placeholder="name"
          className={styles.sign_in_input}
          value={inputValue.name}
          onChange={changeInputValue}
          name="name"
        />
        <p className={styles.text}>Last name</p>
        <input
          type="text"
          placeholder="last name"
          className={styles.sign_in_input}
          value={inputValue.last_name}
          onChange={changeInputValue}
          name="last_name"
        />
        <p className={styles.text}>Middle name</p>
        <input
          type="text"
          placeholder="middle name"
          className={styles.sign_in_input}
          value={inputValue.middle_name}
          onChange={changeInputValue}
          name="middle_name"
        />
        <p className={styles.text}>Email</p>
        <input
          type="email"
          placeholder="Email"
          className={styles.sign_in_input}
          value={inputValue.email}
          onChange={changeInputValue}
          name="email"
        />
        <p className={styles.text}>Password</p>
        <input
          type="password"
          placeholder="Password"
          className={styles.sign_in_input}
          value={inputValue.password}
          onChange={changeInputValue}
          name="password"
        />
        <div className={styles.input_container}>
          <div className={styles.input_block}>
            <input
              type="radio"
              id="student"
              name="role"
              value={3}
              onChange={changeInputValue}
            />
            <label>I'm a student</label>
          </div>
          <div className={styles.input_block}>
            <input
                type="radio"
                id="teacher"
                name="role"
                value={2}
                onChange={changeInputValue}
            />
            <label>I'm a teacher</label>
          </div>
        </div>
        <input type="submit" value="Log in" className={styles.sign_in_button} />
      </form>
    </div>
  );
};

export default AuthorizationPage;
