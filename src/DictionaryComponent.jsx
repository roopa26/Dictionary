import React, { useState } from 'react';

const XDictionary = () => {
  debugger;
  // Initializing the dictionary state
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  // State for the search term and search result
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

  // Function to handle search
  const handleSearch = () => {
    // Case-insensitive search
    const result = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
    if (result) {
      setSearchResult(result.meaning);
    } else {
      setSearchResult('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
       <p><b>Definition:</b></p><p>{searchResult}</p>
      </div>
    </div>
  );
};

export default XDictionary;
