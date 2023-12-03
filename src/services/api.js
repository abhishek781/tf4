import Axios from 'axios';

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/';

export const fetchWordDetails = async (word) => {
  try {
    const response = await Axios.get(`${BASE_URL}${word}`);
    return response.data[0];
  } catch (error) {
    throw error;
  }
};



