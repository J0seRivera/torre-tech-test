import React, { useState, useEffect } from 'react'
import { UserModal } from '../Modal/Modal'
import "./SearchBar.css"
import searchIcon from "../../assets/icons/search.png"


const SearchBar = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const [recentResults, setRecentResults] = useState([]);
  // function to open the modal
  const openModal = (data) => {
    setUserData(data);
    setIsVisible(true);
  };

  // function to close the modal
  const closeModal = () => {
    setIsVisible(false);
  };

  const searchUser = async (username) => {
    try {
      const response = await fetch(`http://localhost:5000/search?username=${username}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      openModal(data)
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  return (
    <div className='searchContainer'>
      <div className='searchBar'>
        <span className='searchIcon'>
          <img src={searchIcon} alt="search icon" />
        </span>
        <input
          className='searchInput'
          type="text"
          placeholder='Searh people by username'
          onChange={(event) => {
            searchUser(event.target.value)
          }} />
        {/* Renderizar el modal solo si isVisible=true */}

      </div>
      {isVisible && (
        <UserModal userData={userData} onClose={closeModal} />
      )}

      {/* Mostrar los últimos 10 resultados */}
      <div className="recent-results">
        <h2>Últimos 10 Resultados:</h2>
        <ul>
          {recentResults.map((result, index) => (
            <li key={index}>{result.name}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export { SearchBar }