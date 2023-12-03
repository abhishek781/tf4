import {
  FETCH_WORD_REQUEST,
  FETCH_WORD_SUCCESS,
  FETCH_WORD_FAILURE,
} from '../actions/wordActions';

const initialState = {
  wordDetails: null,
  loading: false,
  error: null,
};

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WORD_SUCCESS:
      return {
        ...state,
        wordDetails: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_WORD_FAILURE:
      return {
        ...state,
        wordDetails: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default wordReducer;




  