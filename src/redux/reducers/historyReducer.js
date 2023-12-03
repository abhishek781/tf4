// src/redux/reducers/historyReducer.js
import { ADD_TO_HISTORY } from '../actions/historyActions';

const initialState = [];

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      const word = action.payload;
      if (!state.includes(word)) {
        return [word, ...state];
      }
      return state;
    default:
      return state;
  }
};

export default historyReducer;
