import { combineReducers } from "redux";
import { signupReducer } from "./signupReducer";
import { signinReducer } from "./signinReducer";
import { signoutReducer } from "./signoutReducer";
import { tasksReducer } from "./tasksReducer";

const reducers = combineReducers({
  sigup: signupReducer,
  signin: signinReducer,
  signout: signoutReducer,
  tasks: tasksReducer,
});

export default reducers;
