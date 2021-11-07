import React, { useState } from "react";
import classes from "./ClinicReport.module.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router";
import { IoLogOutOutline, IoLocationSharp, IoAdd } from "react-icons/io5";
import ActivityForm from "../Form/ActivityForm";

import Menu from "../Menu/Menu";

const ClinicReport = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleSignout = () => {
    history.push("/");
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
          {/* menu item lists */}
          <Menu />
        </div>
        {/* content column */}
        <div className={classes.content}>
          <div className={classes.main}>
            <div className={classes["col-1"]}>
              <div className={classes.intro}>
                <div>
                  <p className={classes.name}>Hello Alice! 🙂</p>
                </div>
                <div style={{ marginTop: ".5rem", marginBottom: ".75rem" }}>
                  <p style={{ fontSize: ".9em" }}>
                    Organise your day by adding today's to do lists.
                  </p>
                </div>
                <div style={{ marginTop: ".6rem" }}>
                  <button className={classes.btn} onClick={handleShow}>
                    Add Activity{" "}
                    <span
                      style={{
                        padding: ".05rem",
                        border: "2px solid #fff",
                        marginLeft: ".5rem",
                        borderRadius: 5,
                        color: "#fff",
                      }}
                    >
                      <IoAdd />
                    </span>
                  </button>
                </div>
              </div>
              <div className={classes.updates}>
                <p>Next clinic will be on:</p>
                <div className={classes.clinic_date}>
                  <span>November</span>
                  <span>02</span>
                </div>
              </div>
            </div>
            <div className={classes["col-2"]}>
              <div className={classes.profile_image}>
                {/* <img src={profileImage} alt="" /> */}
              </div>
              <div className={classes.info}>
                <p>Alice Jackson</p>
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
              {/* <CalendarComponent /> */}
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
              <div>{/* <TaskList /> */}</div>
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
                  My Health Trends
                </h4>
              </div>
              <div>{/* <Graph /> */}</div>
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

export default ClinicReport;
