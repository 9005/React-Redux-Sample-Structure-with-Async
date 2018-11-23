import { createStore, applyMiddleware, combineReducers } from 'redux';
import { LoginReducer } from './reducer/LoginReducer';
import { LogoutReducer } from './reducer/LogoutReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  login: LoginReducer,
  logout: LogoutReducer
});
export default createStore(rootReducer, applyMiddleware(thunk));