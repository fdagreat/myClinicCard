import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import moment from "moment";

const CalendarComponent = () => {
  const [dateState, setDateState] = useState(new Date());
  //Change Date Method
  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <div>
      <Calendar
        value={dateState}
        onChange={changeDate}
        styles={{ width: "250px" }}
      />
      {/* <p>
        Current selected date is{" "}
        <b>{moment(dateState).format("MMMM Do YYYY")}</b>
      </p> */}
    </div>
  );
};

export default CalendarComponent;
