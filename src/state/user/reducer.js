import actions from "./actions";

export const initialUserState = {
  busyIndicator: false,
  username: {},
  rewards: [],
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
    default:
      return state;
  }
};

export default userReducer;
