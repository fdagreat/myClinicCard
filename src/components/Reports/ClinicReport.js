import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ClinicReport.module.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../../assets/avartar.jpg";
// import { useHistory } from "react-router";
import { IoLogOutOutline } from "react-icons/io5";
import Menu from "../Menu/Menu";
import ReportModal from "./ReportModal";
import ReportCard from "./ReportCard";

const ClinicReport = () => {
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
          {/* menu item lists */}
          <Menu />
        </div>
        {/* content column */}
        <div className={classes.content}>
          <div className={classes.main}>
            {/* top bar section */}
            <div className={classes.top_bar}>
              <div className={classes.title}>Clinic Progress Reports</div>
              <div className={classes.avarta}>
                <div className={classes.avarta_btn}>
                  <button onClick={handleShow}>
                    <span className={classes.plus_icon}>+</span> Create New
                    Report
                  </button>
                </div>
                <div className={classes.user_data}>
                  <div className={classes.avarta_image}>
                    <img src={profileImage} alt="" />
                  </div>
                  <span>Jane Doe</span>
                </div>
              </div>
            </div>
            {/* cards section */}
            <section className={classes.card_grid}>
              <ReportCard />
            </section>
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
            <ReportModal handleClose={handleClose} />
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
