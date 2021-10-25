import { action_types } from "../action-types/action-types";

export const signup = (user) => {
  return (dispatch) => {
    dispatch({ type: action_types.SIGNUP, payload: user });
  };
};
export const signinAction = (user) => {
  return {
    type: action_types.SIGNIN,
    payload: user,
  };
};
export const signoutAction = (user) => {
  return {
    type: action_types.SIGNOUT,
    payload: user,
  };
};

export const addTask = (task) => {
  return {
    type: action_types.ADD_TASK,
    payload: task,
  };
};
export const removeTask = (id) => {
  return {
    type: action_types.REMOVE_TASK,
    payload: id,
  };
};
