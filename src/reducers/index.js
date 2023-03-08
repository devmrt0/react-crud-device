import { combineReducers } from 'redux';
import alert from './alertReducer';
import login from './loginReducer';
import users from './userAddReducer';
import template from './templateReducer';

const rootReducer = combineReducers({
  alert, 
  login,
  users,
  template
});

export default rootReducer;