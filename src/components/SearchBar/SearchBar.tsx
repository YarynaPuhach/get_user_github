import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (username: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    onSearch(username);
  };

  return (
    <div className='searchbar_container'>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
        className='searchbar_input'
      />
      <button className="searchbar_button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;