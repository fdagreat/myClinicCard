import React from "react";
import classes from "./ReportModal.module.css";

const ReportModal = () => {
  return (
    <div className={classes.modalBg}>
      <div className="modalContainer">
        <button>X</button>
        <div className="title">
          <h4>Create Clinic Report</h4>
        </div>
        <div className="body">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            vero.
          </p>
        </div>
        <div className="footer">
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
