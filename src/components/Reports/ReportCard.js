import React from "react";
import { FaCalendar } from "react-icons/fa";
import classes from "./ReportCard.module.css";

const ReportCard = ({ data }) => {
  console.log(data);
  return (
    <div className={classes.card_item}>
      <div className={classes.date_data}>
        <FaCalendar className={classes.dateIcon} />{" "}
        <span className={classes.date_value}>{data.clinicDate}</span>
      </div>
      <div className={classes.report_data}>
        <div className={classes.address}>
          <p>
            Hospital: <span>{data.hospitalName}</span>
          </p>
          <p>
            City: <span>{data.city}</span>
          </p>
        </div>
        <div>
          <p className={classes.recomm_title}>Doctor's Advise</p>
          <div className={classes.recommendations}>
            <p>{data.doctorAdvise}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
