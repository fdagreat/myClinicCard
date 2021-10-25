import { action_types } from "../action-types/action-types";

const tasks = [];
export const tasksReducer = (state = tasks, { type, payload }) => {
  switch (type) {
    case action_types.ADD_TASK:
      return [payload, ...state];
    case action_types.REMOVE_TASK:
      return state.filter((task) => task.id !== payload);
    default:
      return state;
  }
};
