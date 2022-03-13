import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions-creators";
import classes from "./ActivityForm.module.css";

const ActivityForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { addTask } = bindActionCreators(actionCreators, dispatch);
  const today = new Date();
  const defaultFromDate = today.toISOString().slice(0, 10);
  const defaultToDate = today.toISOString().slice(0, 10);
  const defaultFromTime = today.toISOString().slice(11, 16);
  const defaultToTime = today.toISOString().slice(11, 16);

  const [tasks, setTasks] = useState({
    taskName: "Task Name",
    fromTime: defaultFromTime,
    toTime: defaultToTime,
    fromDate: defaultFromDate,
    toDate: defaultToDate,
    priority: "",
  });
  const handleChange = (event) => {
    const value = event.target.value;
    setTasks({ ...tasks, [event.target.name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // addTask(tasks);
    const newTask = {
      id: new Date().getSeconds().toLocaleString(),
      name: tasks.taskName,
      fromTime: tasks.fromTime,
      toTime: tasks.toTime,
      fromDate: tasks.fromDate,
      toDate: tasks.toDate,
      priority: tasks.priority,
    };
    addTask(newTask);
    handleClose();
  };

  return (
    <div>
      <div>
        <form action="" method="POST">
          <div className={classes.form_control}>
            <input
              type="text"
              placeholder="Add a task"
              name="taskName"
              value={tasks.taskName}
              onChange={handleChange}
            />
          </div>
          <div className={classes.duration}>
            <div className={classes.form_control}>
              <div>
                <p>From Time</p>
              </div>
              <input
                type="time"
                value={tasks.fromTime}
                name="fromTime"
                onChange={handleChange}
              />
            </div>
            <div className={classes.form_control}>
              <div>
                <p>To </p>
              </div>
              <input
                type="time"
                value={tasks.toTime}
                name="toTime"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={classes.duration}>
            <div className={classes.form_control}>
              <div>
                <p>From Date</p>
              </div>
              <input
                type="date"
                value={tasks.fromDate}
                name="fromDate"
                onChange={handleChange}
              />
            </div>
            <div className={classes.form_control}>
              <div>
                <p>To Date</p>
              </div>
              <input
                type="date"
                value={tasks.toDate}
                name="toDate"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={classes.form_control}>
            <p style={{ marginTop: ".5rem" }}>Priority</p>
          </div>
          <div className={classes.form_control}>
            <select
              name="priority"
              id=""
              onChange={handleChange}
              value={tasks.priority}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className={classes.form_control_btn}>
            <button
              className={classes.btn}
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActivityForm;
