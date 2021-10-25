import React from "react";
import classes from "./Task.module.css";

const Task = ({ task }) => {
  console.log(task);
  return (
    <div className={classes.taskbox}>
      <div
        className="time"
        style={{ paddingRight: ".5rem", borderRight: "1px solid #4B5563" }}
      >
        {task.time}
      </div>
      <div className="name">{task.name}</div>
      <div className="checkbox">
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default Task;
