import { LOGOUT_SUCCESS } from '../reducer/LogoutReducer';
import loaders from '../utils/loaderUtils';

export const clearSessionLogout = () => {
  return async (dispatch) => {
    try {
      const result = await loaders.clearSessionLogoutDetails();
      dispatch({ type: LOGOUT_SUCCESS, payload: result });
    }
    catch (error) {
      dispatch({ type: LOGOUT_SUCCESS, payload: error.message });
    }
  };
}
