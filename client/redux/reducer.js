import { combineReducers } from 'redux';
import { project, layout } from './ducks';

const rootReducer = combineReducers({
  project,
  layout
});

export default rootReducer;
