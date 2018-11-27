import { POST_FORM_DATA, POST_FORM_DATA_ERROR } from '../reducer/PostFormDataReducer';
import loaders from '../utils/loaderUtils';

export const submitFormData = (requestBody) => {
  return async (dispatch) => {
    try {
      const result = await loaders.submitFormData(requestBody);
      dispatch({ type: POST_FORM_DATA, payload: result });
    }
    catch (error) {
      dispatch({ type: POST_FORM_DATA_ERROR, payload: 'network error' });
    }
  };
}

export const clearNotificationMessage = () => ({ type: POST_FORM_DATA, payload: '' })
