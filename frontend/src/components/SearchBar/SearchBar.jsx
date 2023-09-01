import React, { useState, useEffect } from 'react'
import "./SearchBar.css"
import searchIcon from "../../assets/icons/search.png"


const SearchBar = () => {
  //const [users, setUsers] = React.useState(parsedUsers)



  const searchUser = async (username) => {
    try {
      const response = await fetch(`http://localhost:5000/search?username=${username}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data.person.name + " " + data.person.professionalHeadline)
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  searchUser('joseriveradl')
    .then(userData => {
      console.log(userData.person.name);
      console.log(userData.person.professionalHeadline);
    })
    .catch(error => {
      console.error('Error:', error);
    });


  return (
    <div className='searchBar'>
      <span className='searchIcon'>
        <img src={searchIcon} alt="search icon" />
      </span>
      <input
        className='searchInput'
        type="text"
        placeholder='Searh people by name'
        onChange={(event) => {
          console.log(event.target.value)
          searchUser(event.target.value)
        }} />
    </div>
  )
}

export { SearchBar }