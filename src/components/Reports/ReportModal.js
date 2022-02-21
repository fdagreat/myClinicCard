import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions-creators";
import { FaHeartbeat } from "react-icons/fa";
import classes from "./ReportModal.module.css";

const ReportModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { addReport, addBodyWeight } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [report, setReport] = useState({
    clinicDate: "",
    city: "",
    bodyWeight: "",
    bloodLevel: "",
    childCondition: "",
    hospitalName: "",
    owner: "",
    doctorAdvise: "",
  });

  const handleDate = (event) => {
    setReport((prevState) => {
      return { ...prevState, clinicDate: event.target.value };
    });
  };
  const handleCity = (event) => {
    setReport((prevState) => {
      return { ...prevState, city: event.target.value };
    });
  };
  const handleWeight = (event) => {
    setReport((prevState) => {
      return { ...prevState, bodyWeight: event.target.value };
    });
  };
  const handleBlood = (event) => {
    setReport((prevState) => {
      return { ...prevState, bloodLevel: event.target.value };
    });
  };
  const handleCondition = (event) => {
    setReport((prevState) => {
      return { ...prevState, childCondition: event.target.value };
    });
  };
  const handleOwner = (event) => {
    setReport((prevState) => {
      return { ...prevState, owner: event.target.value };
    });
  };
  const handleName = (event) => {
    setReport((prevState) => {
      return { ...prevState, hospitalName: event.target.value };
    });
  };
  const handleAdvise = (event) => {
    setReport((prevState) => {
      return { ...prevState, doctorAdvise: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReport = {
      id: new Date().getSeconds().toLocaleString(),
      ...report,
    };
    addReport(newReport);
    addBodyWeight(report.bodyWeight);
    onClose();
  };
  return (
    <div className={classes.modalBg}>
      <div className="modalContainer">
        <div className={classes.title_bar}>
          <FaHeartbeat className={classes.heart_icon} />
          <h3>Keep record of your health progress</h3>
          {/* <p>
            Fill in the clinic appointment's feeback <br /> from your doctor/
            nurse.
          </p> */}
        </div>
        <div className={classes.body}>
          <form className={classes.form}>
            <div className={classes.left_controls}>
              <div className={classes.form_control}>
                <label htmlFor="clinic_date" className={classes.label}>
                  Visit Date
                </label>
                <div className={classes.control}>
                  <input
                    type="date"
                    className={classes.input_box}
                    value={report.clinicDate}
                    onChange={handleDate}
                  />
                </div>
              </div>
              <div className={classes.form_control}>
                <label htmlFor="city" className={classes.label}>
                  City/ Town
                </label>
                <div className={classes.control}>
                  <input
                    type="text"
                    className={classes.input_box}
                    value={report.city}
                    onChange={handleCity}
                  />
                </div>
              </div>
              <div className={classes.form_control}>
                <label htmlFor="body_weight" className={classes.label}>
                  Body Weight
                </label>
                <div className={classes.control}>
                  <input
                    type="number"
                    className={classes.input_box}
                    min={10}
                    max={180}
                    value={report.bodyWeight}
                    onChange={handleWeight}
                  />
                </div>
              </div>
              <div className={classes.form_control}>
                <label htmlFor="blood_level" className={classes.label}>
                  Blood level
                </label>
                <div className={classes.control}>
                  <input
                    type="number"
                    className={classes.input_box}
                    min={5}
                    max={50}
                    value={report.bloodLevel}
                    onChange={handleBlood}
                  />
                </div>
              </div>
              <div className={classes.form_control}>
                <label htmlFor="child_condition" className={classes.label}>
                  Child Condition
                </label>
                <div className={classes.control}>
                  <select
                    name="status"
                    id=""
                    className={classes.options}
                    value={report.childCondition}
                    onChange={handleCondition}
                  >
                    <option value=""></option>
                    <option value="excellent">Excellent</option>
                    <option value="very good">Very Good</option>
                    <option value="good">Good</option>
                    <option value="needs attention">
                      Needs Doctor's Attention
                    </option>
                  </select>
                </div>
              </div>
            </div>
            {/* right colum controls */}
            <div className={classes.right_controls}>
              <div className={classes.form_control}>
                <label htmlFor="hospital_name" className={classes.label}>
                  Hospital Name
                </label>
                <div className={classes.control}>
                  <input
                    type="text"
                    className={classes.input_box}
                    value={report.hospitalName}
                    onChange={handleName}
                  />
                </div>
              </div>
              <div className={classes.form_control}>
                <label htmlFor="hospital_owner" className={classes.label}>
                  Owned By
                </label>
                <div className={classes.control}>
                  <select
                    name="owner"
                    id=""
                    className={classes.options}
                    value={report.owner}
                    onChange={handleOwner}
                  >
                    <option value=""></option>
                    <option value="government">Government</option>
                    <option value="private">Private</option>
                  </select>
                </div>
              </div>
              <div className={classes.form_control}>
                <label htmlFor="doctor_advise" className={classes.label}>
                  Doctor's Advise
                </label>
                <div className={classes.control}>
                  <textarea
                    type="text"
                    className={classes.input_box}
                    rows={8}
                    value={report.doctorAdvise}
                    onChange={handleAdvise}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={classes.footer}>
          <button className={classes.save_btn} onClick={handleSubmit}>
            Save
          </button>
          <button className={classes.cancel_btn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
