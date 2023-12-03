import React from 'react';
import { connect } from 'react-redux';

function WordDetails({ wordDetails, loading, error }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {wordDetails && (
        <div>
          <h2>{wordDetails.word}</h2>
          <h4>Parts of speech:</h4>
          <p>{wordDetails.meanings[0].partOfSpeech}</p>
          <h4>Pronunciation:</h4>
          {wordDetails.phonetics.map((phonetic, index) => (
            <div key={index}>
              <p>{phonetic.text}</p>
              <audio controls>
                <source src={phonetic.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
          <h4>Definition:</h4>
          <p>{wordDetails.meanings[0].definitions[0].definition}</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  wordDetails: state.word.wordDetails,
  loading: state.word.loading,
  error: state.word.error,
});

export default connect(mapStateToProps)(WordDetails);



