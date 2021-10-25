import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions-creators";
import classes from "./ActivityForm.module.css";

const ActivityForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { addTask } = bindActionCreators(actionCreators, dispatch);

  const [tasks, setTasks] = useState({
    taskname: "",
    time: "00:00",
    priority: "",
  });
  const handleChange = (event) => {
    const value = event.target.value;
    setTasks({ ...tasks, [event.target.name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: new Date().getSeconds().toLocaleString(),
      name: tasks.taskname,
      time: tasks.time,
      priority: tasks.priority,
    };
    addTask(newTask);
    handleClose();
  };
  // addTask(tasks);

  return (
    <div>
      <div>
        <form action="" method="POST">
          <div className={classes.form_control}>
            <input
              type="text"
              placeholder="Add a task"
              name="taskname"
              value={tasks.taskname}
              onChange={handleChange}
            />
          </div>
          <div className={classes.form_control}>
            <input
              type="time"
              value={tasks.time}
              name="time"
              onChange={handleChange}
            />
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
