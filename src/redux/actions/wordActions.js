import Axios from 'axios';

export const FETCH_WORD_REQUEST = 'FETCH_WORD_REQUEST';
export const FETCH_WORD_SUCCESS = 'FETCH_WORD_SUCCESS';
export const FETCH_WORD_FAILURE = 'FETCH_WORD_FAILURE';

export const fetchWordRequest = () => {
  return {
    type: FETCH_WORD_REQUEST,
  };
};

export const fetchWordSuccess = (wordDetails) => {
  return {
    type: FETCH_WORD_SUCCESS,
    payload: wordDetails,
  };
};

export const fetchWordFailure = (error) => {
  return {
    type: FETCH_WORD_FAILURE,
    payload: error,
  };
};

export const fetchWord = (word) => {
  return (dispatch) => {
    dispatch(fetchWordRequest());
    Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
      .then((response) => {
        const wordDetails = response.data[0];
        dispatch(fetchWordSuccess(wordDetails));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchWordFailure(errorMessage));
      });
  };
};



