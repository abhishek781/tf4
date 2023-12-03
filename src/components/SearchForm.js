import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchWord } from '../redux/actions/wordActions';
import { addToHistory } from '../redux/actions/historyActions';

function SearchForm({ fetchWord, addToHistory }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      fetchWord(searchTerm);
      addToHistory(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} class="searchbutton">Search</button>
    </div>
  );
}

export default connect(null, { fetchWord, addToHistory })(SearchForm);




