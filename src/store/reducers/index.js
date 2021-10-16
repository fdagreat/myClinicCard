import { combineReducers } from "redux";
import { signupReducer } from "./signupReducer";
import { signinReducer } from "./signinReducer";
import { signoutReducer } from "./signoutReducer";

const reducers = combineReducers({
  sigup: signupReducer,
  signin: signinReducer,
  signout: signoutReducer,
});

export default reducers;
