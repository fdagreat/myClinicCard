import React from "react";
import classes from "./TaskList.module.css";
import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = () => {
  const store = useSelector((store) => store.tasks);
  console.log(store);

  const taskLists = store.map((task) => <Task key={task.id} task={task} />);
  return (
    <div className={classes.taskswrapper}>
      {store.length === 0 ? (
        <p style={{ textAlign: "center", paddingTop: "3rem" }}>
          No activities yet 😜
        </p>
      ) : (
        taskLists
      )}
    </div>
  );
};

export default TaskList;
