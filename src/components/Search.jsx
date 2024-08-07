import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBusinesses } from '../redux/slice/todo';
import '../styles/Search.css';

function Search() {

  const dispatch = useDispatch()
  const [filter, setFilter] = useState('best_match')

  const onClickSort = (sortby) => {
    setFilter(sortby)
    onClick(sortby)
  }


  const onClick = (filter) => {
    const term = document.getElementById('search-term').value
    const location = document.getElementById('search-location').value
    dispatch(fetchBusinesses({ term: term, location: location, sortby: filter }))
  }

  return (
    <div className='search-container'>
      <div className='sort-container'>
        <button className='sort-button' id='btn-best-match' value='best_match' onClick={() => onClickSort('best_match')}>Best Match</button>
        <button className='sort-button' id='btn-highest-rated' value='rating' onClick={() => onClickSort('rating')}>Highest Rated</button>
        <button className='sort-button' id='btn-most-reviewed' value='review_count' onClick={() => onClickSort('review_count')}>Most Reviewed</button>
      </div>
      <div className='input-container'>
        <input className='search-input' id="search-term" type='search' placeholder='Search' />
        <input className='search-input' id="search-location" type='search' placeholder='Where' />
      </div>
      <div className='search-button-container'>
        <button id="btn-search" onClick={() => onClick(filter)}>Let's Go</button>
      </div>
    </div>
  )
}

export default Search