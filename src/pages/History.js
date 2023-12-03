import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function History({ history }) {
  return (
    <div>
      <h1>Search History</h1>
      <ul>
        {history.map((word, index) => (
          <li key={index}>
            <Link to={`/word/${word}`}>{word}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  history: state.history,
});

export default connect(mapStateToProps)(History);





