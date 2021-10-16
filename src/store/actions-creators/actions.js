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
