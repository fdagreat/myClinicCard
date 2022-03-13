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

  // Getting Current Date on the right format
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 0).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  today.setDate(dd);
  today.setMonth(mm);
  today.setFullYear(yyyy);
  const todayDate = today.toISOString().slice(0, 10);

  const taskLists = store.map((task) => (
    // show only tasks whose deadline is greater than today
        task.toDate >= todayDate ? (
    <Task key={task.id} task={task} onRemove={removeTask} />
    ) : []

  ));

    console.log(taskLists); 
  return (
    <div className={classes.taskswrapper}>
      {store.length === 0 || taskLists[0].length === 0 ?   (
        <p style={{ textAlign: "center", paddingTop: "3rem" }}>
          No activities for you today 😜
        </p>
      ) : (
        taskLists 
      )}
    </div>
  );
};

export default TaskList;
