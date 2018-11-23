export const LOGIN_SUCCESS = `LOGIN_SUCCESS`;
export const LOGIN_FAILURE = `LOGIN_FAILURE`;

const initialState = {
  result: ''
};

export const LoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        result: payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        result: payload
      };
    default:
      return state;
  }
};

