import { combineReducers } from 'redux';
import { topicsReducer } from './topicsReducer'

const rootReducer = combineReducers({
  topicsReducer,
});

export default rootReducer;
