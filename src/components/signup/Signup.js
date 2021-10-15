import React from "react";
import { useHistory } from "react-router";
import classes from "./Signup.module.css";

const Signup = () => {
  const history = useHistory();

  const signinHandle = () => {
    history.push("/");
  };
  return (
    <div className={classes.signup}>
      <div className={classes.banner}></div>
      <div className={classes["signup-form"]}>
        <h3 className={classes.title}>my Clinic Card</h3>
        <p className={classes["sub-title"]}>Sign Up</p>
        <div className={classes.form}>
          <form action="">
            <div className={classes["form-control"]}>
              <input
                type="text"
                name="firstname"
                className="form-input"
                placeholder="Enter First Name"
              />
            </div>
            <div className={classes["form-control"]}>
              <input
                type="text"
                name="lastname"
                className="form-input"
                placeholder="Enter Last Name"
              />
            </div>
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
            <div className={classes["form-control"]}>
              <input
                type="password"
                name="password2"
                className="form-input"
                placeholder="Comfirm password"
              />
            </div>
            <div className="form-control">
              <button type="submit" className={classes.btn}>
                Sign Up
              </button>
            </div>
            <div className={classes["form-control"]}>
              <p>
                Have an account already?
                <span className={classes["signup-text"]} onClick={signinHandle}>
                  Sign In
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
