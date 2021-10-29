import React from "react";
import classes from "./TaskList.module.css";
import Task from "./Task";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions-creators";

const TaskList = () => {
  const dispatch = useDispatch();
  const { removeTask } = bindActionCreators(actionCreators, dispatch);
  const store = useSelector((store) => store.tasks);
  console.log(store);

  const taskLists = store.map((task) => (
    <Task key={task.id} task={task} onRemove={removeTask} />
  ));
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
