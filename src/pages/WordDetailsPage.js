import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWord } from '../redux/actions/wordActions';

function WordDetailsPage({ match, fetchWord }) {
  const word = match.params.word;

  useEffect(() => {
    fetchWord(word);
  }, [word, fetchWord]);

  return (
    <div>
      <h1>Word Details</h1>
      {/* Display the word details here */}
    </div>
  );
}

export default connect(null, { fetchWord })(WordDetailsPage);





