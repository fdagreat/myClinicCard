import { combineReducers } from "redux";
import { signupReducer } from "./signupReducer";
import { signinReducer } from "./signinReducer";
import { signoutReducer } from "./signoutReducer";
import { tasksReducer } from "./tasksReducer";
import { reportReducer } from "./addReportReducer";
import { bodyReducer } from "./bodyWeightReducer";

const reducers = combineReducers({
  sigup: signupReducer,
  signin: signinReducer,
  signout: signoutReducer,
  tasks: tasksReducer,
  reports: reportReducer,
  bodyWeight: bodyReducer,
});

export default reducers;
