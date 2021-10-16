import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions-creators";
import { useHistory } from "react-router";
import classes from "./Signup.module.css";

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const { signup } = bindActionCreators(actionCreators, dispatch);
  //setting up state to store data from the form

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(userData);
    setUserData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
    });
  };

  const signinHandle = () => {
    history.push("/");
  };

  console.log(store);
  return (
    <div className={classes.signup}>
      <div className={classes.banner}></div>
      <div className={classes["signup-form"]}>
        <h3 className={classes.title}>my Clinic Card</h3>
        <p className={classes["sub-title"]}>Sign Up</p>
        <div className={classes.form}>
          <form action="" onSubmit={handleSubmit}>
            <div className={classes["form-control"]}>
              <input
                type="text"
                name="firstname"
                className="form-input"
                placeholder="Enter First Name"
                value={userData.firstname}
                onChange={handleChange}
              />
            </div>
            <div className={classes["form-control"]}>
              <input
                type="text"
                name="lastname"
                className="form-input"
                placeholder="Enter Last Name"
                value={userData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className={classes["form-control"]}>
              <input
                type="text"
                name="email"
                className="form-input"
                placeholder="Enter email or phone number"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className={classes["form-control"]}>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter password"
                value={userData.password}
                onChange={handleChange}
              />
            </div>
            <div className={classes["form-control"]}>
              <input
                type="password"
                name="password2"
                className="form-input"
                placeholder="Comfirm password"
                value={userData.password2}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <button
                type="submit"
                className={classes.btn}
                onClick={handleSubmit}
              >
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
