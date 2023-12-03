// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import WordDetailsPage from './pages/WordDetailsPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Display Home component by default */}
          <Route index element={<Home />} />

          {/* Additional routes */}
          <Route path="/history" element={<History />} />
          <Route path="/word/:word" element={<WordDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



