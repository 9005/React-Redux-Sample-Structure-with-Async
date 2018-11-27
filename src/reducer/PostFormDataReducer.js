export const POST_FORM_DATA = `POST_FORM_DATA`;
export const POST_FORM_DATA_ERROR = `POST_FORM_DATA_ERROR`;

const initialState = {
  result: [],
  errorMessage: ''
};

export const PostFormDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_FORM_DATA:
      return {
        ...state,
        result: payload,
      };
    case POST_FORM_DATA_ERROR:
      return {
        ...state,
        errorMessage: payload,
      };
    default:
      return state;
  }
};