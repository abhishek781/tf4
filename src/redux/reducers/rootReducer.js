import { combineReducers } from 'redux';
import wordReducer from './wordReducer';
import historyReducer from './historyReducer';

const rootReducer = combineReducers({
  word: wordReducer,
  history: historyReducer,
});

export default rootReducer;
