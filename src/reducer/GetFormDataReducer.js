export const GET_FORM_DATA = `FORM_DATA`;
export const GET_FORM_DATA_ERROR = `FORM_DATA_ERROR`;

const initialState = {
  result: [],
  errorMessage: ''
};

export const GetFormDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FORM_DATA:
      return {
        ...state,
        result: payload,
      };
    case GET_FORM_DATA_ERROR:
      return {
        ...state,
        errorMessage: payload,
      };
    default:
      return state;
  }
};