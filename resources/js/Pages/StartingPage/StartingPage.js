import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";

const StartingPage = ({login,changeInputValue, inputValue, errors}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to studying platform !</h1>
      <div className={styles.card_container}>
        <div className={styles.card_register}>
          <div className={styles.card_register_container}>
            <h3 className={styles.card_title}>First time here?</h3>
            <p className={styles.card_description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et
              repellendus sapiente nostrum facilis harum odio placeat non
              exercitationem facere, consequuntur officiis soluta esse est atque
              recusandae tempore nihil.
            </p>
            <Link to="/auth">
              <button className={styles.card_button_register}>Sign up</button>
            </Link>
          </div>
        </div>
        <div className={styles.card_login}>
          <div className={styles.card_login_container}>
            <h3 className={styles.card_title}>Log in</h3>
              <p className={styles.error}>{errors}</p>
            <form
              method="post"
              className={styles.form_container}
              onSubmit={login}
            >
              <input
                type="email"
                placeholder="Email"
                className={styles.sign_in_input}
                value={inputValue.email}
                onChange={changeInputValue}
                name="email"
              />
              <input
                type="password"
                className={styles.sign_in_input}
                value={inputValue.password}
                onChange={changeInputValue}
                name="password"
              />
              <input
                type="submit"
                value="Log in"
                className={styles.sign_in_button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
