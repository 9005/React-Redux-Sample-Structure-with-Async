import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../reducer/LoginReducer';
import loaders from '../utils/loaderUtils';

export const authenticateUserDetails = () => {
  return async (dispatch) => {
    try {
      const result = await loaders.authenticateGuestDetails();
      dispatch({ type: LOGIN_SUCCESS, payload: result });
    }
    catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };
}
