import actions from "./actions";

export const initialUserState = {
  busyIndicator: false,
  username: {},
  rewards: [],
  pomodoros: 10,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actions.TOGGLE_IS_BUSSY_INDICATOR:
      return {
        ...state,
        busyIndicator: action.busyIndicator,
      };
    case actions.ADD_REWARD:
      return {
        ...state,
        rewards: action.rewards,
      };
    case actions.ADD_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case actions.ADD_POMODOROS:
      return {
        ...state,
        pomodoros: action.pomodoros,
      };
    default:
      return state;
  }
};

export default userReducer;
