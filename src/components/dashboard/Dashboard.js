import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Dashboard.module.css";
import profileImage from "../../assets/avartar.jpg";
import Menu from "../Menu/Menu";
import { IoLogOutOutline, IoLocationSharp } from "react-icons/io5";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CalendarComponent from "../calendar/CalendarComponent";
import ActivityForm from "../Form/ActivityForm";
import TaskList from "../Tasks/TaskList";
import Graph from "../Graph/Graph";
import { IoAdd } from "react-icons/io5";

const Dashboard = () => {
  //state to hold show or hide modal events and store tasks data
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={classes.grid}>
        {/* menu column */}
        <div className={classes.menu}>
          <Link to="/" className={classes.topbar}>
            <span>
              <IoLogOutOutline className={classes.icon} />
            </span>
            Logout
          </Link>
          {/* menu items */}
          <Menu />
        </div>
        {/* content column */}
        <div className={classes.content}>
          <div className={classes.main}>
            <div className={classes["col-1"]}>
              <div className={classes.intro}>
                <div>
                  <p className={classes.name}>Hello Jane Doe! 🙂</p>
                </div>
                <div style={{ marginTop: ".5rem", marginBottom: ".75rem" }}>
                  <p style={{ fontSize: ".9em" }}>
                    Organise your day by adding activities to forcus on, step
                    ahead and acomplish all of them today.
                  </p>
                </div>
                <div style={{ marginTop: ".6rem", textAlign: "right" }}>
                  <button className={classes.btn} onClick={handleShow}>
                    <span
                      style={{
                        padding: ".05rem",
                        marginRight: "1rem",
                        color: "#fff",
                        fontSize: "1.1rem",
                      }}
                    >
                      <IoAdd />
                    </span>
                    Add Activity{" "}
                  </button>
                </div>
              </div>
              {/* <div className={classes.updates}>
                <p>Next clinic will be on:</p>
                <div className={classes.clinic_date}>
                  <span>November</span>
                  <span>02</span>
                </div>
              </div> */}
            </div>
            <div className={classes["col-2"]}>
              <div className={classes.profile_image}>
                <img src={profileImage} alt="" />
              </div>
              <div className={classes.info}>
                <p>Jane Doe</p>
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
                  Dar es Salaam, Tanzania
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
                Today's Activities
              </p>
              <div>
                <TaskList />
              </div>
            </div>
            <div className={classes["col-5"]}>
              <div style={{ marginBottom: "1rem" }}>
                <h4
                  style={{
                    color: "#34d399",
                    fontWeight: "600",
                    fontSize: "1.25em",
                  }}
                >
                  Baby & Mother progress
                </h4>
              </div>
              <div>
                <Graph />
              </div>
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
            <ActivityForm handleClose={handleClose} />
          </Modal.Body>
          {/* <Modal.Footer>
            <Button
              variant="primary"
              onClick={handleClose}
              className={classes.btn}
              style={{ borderRadius: "0px" }}
              type="submit"
            >
              Save
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
