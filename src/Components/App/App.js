import React, { useState, useCallback } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);



  return (
    <div className='container'>
      <div className='title-container'>
        <h1 className='title'>
          Jammming
        </h1>
      </div>
      <div className="App">
        <div className="App-playlist">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;
