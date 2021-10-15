import React from "react";
import { useHistory } from "react-router";
import classes from "./Signin.module.css";

const Signin = () => {
  const history = useHistory();

  const signupHandle = () => {
    history.push("/signup");
  };
  return (
    <div className={classes.signin}>
      <div className={classes.banner}></div>
      <div className={classes["login-form"]}>
        <h3 className={classes.title}>my Clinic Card</h3>
        <p className={classes["sub-title"]}>Sign In</p>
        <div className={classes.form}>
          <form action="">
            <div className={classes["form-control"]}>
              <input
                type="text"
                name="email"
                className="form-input"
                placeholder="Enter email or phone number"
              />
            </div>
            <div className={classes["form-control"]}>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter password"
              />
            </div>
            <div className="form-control">
              <button type="submit" className={classes.btn}>
                Sign In
              </button>
            </div>
            <div className={classes["form-control"]}>
              <p>
                Don't have an account ?
                <span className={classes["signup-text"]} onClick={signupHandle}>
                  Sign Up
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
