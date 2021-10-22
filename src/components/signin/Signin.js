import React from "react";
import { useHistory } from "react-router";
import Logo from "../Logo/Logo";
import classes from "./Signin.module.css";

const Signin = () => {
  const history = useHistory();

  const handleSignin = () => {
    history.push("/Dashboard");
  };

  const signupHandle = () => {
    history.push("/signup");
  };
  return (
    <div className={classes.signin}>
      <div className={classes.banner}></div>
      <div className={classes["login-form"]}>
        <Logo />
        <p className={classes["sub-title"]}>Sign In</p>
        <div className={classes.form}>
          <form method="POST">
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
              <button
                type="submit"
                className={classes.btn}
                onClick={handleSignin}
                style={{ border: "none" }}
              >
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
