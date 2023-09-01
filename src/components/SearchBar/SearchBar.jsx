import React from 'react'
import "./SearchBar.css"
import searchIcon from "../../assets/icons/search.png"
const SearchBar = () => {
  return (
    <div className='searchBar'>
      <span className='searchIcon'>
        <img src={searchIcon} alt="search icon" />
      </span>
      <input className='searchInput' type="text" placeholder='Searh people by name' />
    </div>
  )
}

export { SearchBar }