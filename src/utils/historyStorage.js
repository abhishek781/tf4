const HISTORY_KEY = 'search_history';

export const addToHistory = (word) => {
  const history = getHistory();
  if (!history.includes(word)) {
    history.unshift(word);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }
};

export const getHistory = () => {
  const history = localStorage.getItem(HISTORY_KEY);
  return history ? JSON.parse(history) : [];
};
