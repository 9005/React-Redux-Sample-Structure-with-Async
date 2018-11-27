import { GET_FORM_DATA, GET_FORM_DATA_ERROR } from '../reducer/GetFormDataReducer';
import loaders from '../utils/loaderUtils';

export const getFormDetails = () => {
  return async (dispatch) => {
    try {
      const result = await loaders.getFormDetails();
      dispatch({ type: GET_FORM_DATA, payload: result });
    }
    catch (error) {
      dispatch({ type: GET_FORM_DATA_ERROR, payload: 'network error' });
    }
  };
}
