import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions-creators";
import { useHistory } from "react-router";
import classes from "./Signup.module.css";
import Logo from "../Logo/Logo";

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { signup } = bindActionCreators(actionCreators, dispatch);
  //setting up state to store data from the form

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const [message, setMessage] = useState("");
  const [borderColor, setBorderColor] = useState("");

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  //method to capture form data and validate before saving to the database;
  const handleSubmit = (event) => {
    event.preventDefault();
    const passwordMatch =
      userData.password !== userData.password2 ? true : false;

    if (
      userData.firstname === "" ||
      userData.last === "" ||
      userData.email === "" ||
      userData.password === "" ||
      userData.password2 === ""
    ) {
      history.push("/signup");
      setBorderColor("red");
    } else if (passwordMatch) {
      history.push("/signup");
      setMessage("Password do not match");
      setBorderColor("");
    } else {
      signup(userData);
      history.push("/");
      setUserData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password2: "",
      });
    }
  };

  //method to direct user to sign in page
  const signinHandle = () => {
    history.push("/");
  };

  return (
    <div className={classes.signup}>
      <div className={classes.banner}></div>
      <div className={classes["signup-form"]}>
        <Logo />
        <p className={classes["sub-title"]}>Sign Up</p>
        <div className={classes.form}>
          <form method="POST" onSubmit={handleSubmit}>
            <div className={classes["form-control"]}>
              <input
                type="text"
                name="firstname"
                className="form-input"
                placeholder="Enter First Name"
                value={userData.firstname}
                onChange={handleChange}
                required
                style={{ border: `1px solid ${borderColor}` }}
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
                required
                style={{ border: `1px solid ${borderColor}` }}
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
                required
                style={{ border: `1px solid ${borderColor}` }}
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
                required
                style={{ border: `1px solid ${borderColor}` }}
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
                required
                style={{ border: `1px solid ${borderColor}` }}
              />
            </div>
            <div className={classes["form-control"]}>
              <p className={classes.message}>{message}</p>
            </div>
            <div lassName={classes["form-control"]}>
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
