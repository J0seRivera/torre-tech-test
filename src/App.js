import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { SearchBar } from './components/SearchBar/SearchBar';
import './App.css';
import './index.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
    </div>
  );
}

export default App;
