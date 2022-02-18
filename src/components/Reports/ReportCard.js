import React from "react";
import { FaCalendar } from "react-icons/fa";
import classes from "./ReportCard.module.css";

const ReportCard = () => {
  return (
    <div className={classes.card_item}>
      <div className={classes.date_data}>
        <FaCalendar className={classes.dateIcon} />{" "}
        <span className={classes.date_value}>17th February 2022</span>
      </div>
      <div className={classes.report_data}>
        <div className={classes.address}>
          <p>
            Hospital: <span>Vijibweni Hospital</span>
          </p>
          <p>
            District: <span>Kigamboni</span>
          </p>
          <p>
            City: <span>Dar es Salaam</span>
          </p>
        </div>
        <div>
          <p className={classes.recomm_title}>Doctor Recommendations</p>
          <div className={classes.recommendations}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              aliquam molestias culpa nesciunt repellendus molestiae, tenetur
              earum necessitatibus harum dolores illo quam ad adipisci, natus
              quo! Blanditiis recusandae non repellendus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
