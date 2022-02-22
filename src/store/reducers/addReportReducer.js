import { action_types } from "../action-types/action-types";
const reports = [];
export const reportReducer = (state = reports, { type, payload }) => {
  switch (type) {
    case action_types.ADD_REPORT:
      return [payload, ...state];
    default:
      return state;
  }
};
