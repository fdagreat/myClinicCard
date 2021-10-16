import { action_types } from "../action-types/action-types";

export const signinReducer = (state = [], { type, payload }) => {
  switch (type) {
    case action_types.SIGNIN:
      return [...state, payload];
    default:
      return state;
  }
};
