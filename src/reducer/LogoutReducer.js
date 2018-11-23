export const LOGOUT_SUCCESS = `LOGOUT_SUCCESS`;

const initialState = {
  resultOfLogout: ''
};

export const LogoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGOUT_SUCCESS:
      return {
        ...state,
        resultOfLogout: payload
      };
    default:
      return state;
  }
};

