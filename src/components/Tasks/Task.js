import React from "react";
import classes from "./Task.module.css";

const Task = ({ task, onRemove }) => {
  console.log(task);
  return (
    <div className={classes.taskbox}>
      <div
        className={classes.time}
        style={{ paddingRight: ".2rem", borderRight: "1px solid #4B5563" }}
      >
        {task.fromTime} - {task.toTime}
      </div>
      <div className={classes.name}>{task.name}</div>
      <div className={classes.checkbox}>
        <input type="checkbox" onClick={() => onRemove(task.id)} />
      </div>
    </div>
  );
};

export default Task;
