import { createStore, applyMiddleware, combineReducers } from 'redux';
import { GetFormDataReducer } from './reducer/GetFormDataReducer';
import { PostFormDataReducer } from './reducer/PostFormDataReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  getFormData: GetFormDataReducer,
  postFormData: PostFormDataReducer
});
export default createStore(rootReducer, applyMiddleware(thunk));