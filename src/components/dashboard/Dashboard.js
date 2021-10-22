import React, { useState } from "react";
import { useHistory } from "react-router";
import classes from "./Dashboard.module.css";
import profileImage from "../../assets/avartar.jpg";
import { GoLightBulb, GoDiff } from "react-icons/go";
import {
  IoLogOutOutline,
  IoChatbubblesOutline,
  IoLocationSharp,
} from "react-icons/io5";
import { RiSettings3Line, RiFunctionFill } from "react-icons/ri";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CalendarComponent from "../calendar/CalendarComponent";

const Dashboard = () => {
  // hook to track url visited
  const history = useHistory();
  //state to hold show or hide modal events and store tasks data
  const [show, setShow] = useState(false);

  const handleClose = (event) => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [tasks, setTasks] = useState({
    taskname: "",
    time: "00:00",
    priority: "High",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setTasks({ ...tasks, [event.target.name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTasks({ taskname: "", time: "", priority: "High" });
  };
  //function to logout user
  const handleSignout = () => {
    history.goBack("/");
  };

  return (
    <>
      <div className={classes.grid}>
        {/* menu column */}
        <div className={classes.menu}>
          <div className={classes.topbar} onClick={handleSignout}>
            <span>
              <IoLogOutOutline className={classes.icon} />
            </span>
            Logout
          </div>
          <div className={classes.menu_items}>
            <ul className={classes.menu_lists}>
              <li className={classes.menu__list_item}>
                <RiFunctionFill className={classes.icon} />
                Dashboard
              </li>
              <li className={classes.menu__list_item}>
                <GoDiff className={classes.icon} />
                Clinic Report
              </li>
              <li className={classes.menu__list_item}>
                <GoLightBulb className={classes.icon} />
                Learn
              </li>
              <li className={classes.menu__list_item}>
                <IoChatbubblesOutline className={classes.icon} />
                Charts
              </li>
              <li className={classes.menu__list_item}>
                <RiSettings3Line className={classes.icon} />
                Profile
              </li>
            </ul>
          </div>
        </div>
        {/* content column */}
        <div className={classes.content}>
          <div className={classes.main}>
            <div className={classes["col-1"]}>
              <div>
                <p className={classes.name}>Hello Khadija! 🙂</p>
              </div>
              <div style={{ marginTop: ".5rem", marginBottom: ".75rem" }}>
                <p style={{ fontSize: ".9em" }}>
                  Don't forgrt to add your activities to keep your day
                  organised. Daily exercises are very important.
                </p>
              </div>
              <div style={{ marginTop: ".6rem" }}>
                <button className={classes.btn} onClick={handleShow}>
                  Add Activity
                </button>
              </div>
            </div>
            <div className={classes["col-2"]}>
              <div className={classes.profile_image}>
                <img src={profileImage} alt="" />
              </div>
              <div className={classes.info}>
                <p>Khadija Juma</p>
              </div>
              <div className={classes.location}>
                <p>
                  <span
                    style={{
                      marginRight: ".35rem",
                      color: "#34D399",
                      fontSize: "1.2em",
                    }}
                  >
                    <IoLocationSharp />
                  </span>
                  Dar es Salaam
                </p>
              </div>
              <div className={classes.badge}>
                <div>
                  <span> A +</span>
                  <p>Blood</p>
                </div>
                <div>
                  <span>150 cm</span>
                  <p>Heigh</p>
                </div>
                <div>
                  <span>65 kg</span>
                  <p>Weight</p>
                </div>
              </div>
            </div>
            {/* col3 */}
            <div className={classes["col-3"]}>
              <CalendarComponent />
            </div>
            <div className={classes["col-4"]}>
              <p
                style={{
                  color: "#34d399",
                  fontWeight: "600",
                  fontSize: "1.05em",
                }}
              >
                Health Activities Today
              </p>
              <p>No activities for today!</p>
            </div>
            <div className={classes["col-5"]}>
              <div>
                <h4
                  style={{
                    color: "#34d399",
                    fontWeight: "600",
                    fontSize: "1.25em",
                  }}
                >
                  My Health Trends
                </h4>
              </div>
              <div>Display graph</div>
            </div>
          </div>
        </div>
      </div>
      {/* modal component */}
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                fontSize: "1.05em",
                fontWeight: "600",
                color: "#34d399",
              }}
            >
              Add New Activity
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <form action="" method="POST" onSubmit={handleSubmit}>
                <div className={classes.form_control}>
                  <input
                    type="text"
                    placeholder="Add a task"
                    name="taskname"
                    value={tasks.taskname}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.form_control}>
                  <input
                    type="time"
                    value={tasks.time}
                    name="time"
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.form_control}>
                  <p style={{ marginTop: ".5rem" }}>Priority</p>
                </div>
                <div className={classes.form_control}>
                  <select
                    name="priority"
                    id=""
                    onChange={handleChange}
                    value={tasks.priority}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={handleClose}
              className={classes.btn}
              style={{ borderRadius: "0px" }}
              type="submit"
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
