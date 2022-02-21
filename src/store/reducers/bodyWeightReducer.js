import { action_types } from "../action-types/action-types";

export const bodyReducer = (state = [0, 0, 0], { type, payload }) => {
  switch (type) {
    case action_types.ADD_WEIGHT:
      return [...state, payload];
    default:
      return state;
  }
};
