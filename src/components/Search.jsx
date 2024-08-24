import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBusinesses } from '../redux/slice/todo';
import '../styles/Search.css';

function Search() {

  const dispatch = useDispatch()
  const [filter, setFilter] = useState('')
  const [term, setTerm] = useState('')
  const [location, setLocation] = useState('')

  const onClickSort = (sortby) => {
    setFilter(sortby)
    onClick(sortby)
    const modal = document.getElementsByClassName('modal')[0]
    modal.style.display = 'none';
  }

  const handleTermChange = ({target}) => {
      setTerm(target.value)
  }

  const handleLocationChange = ({target}) => {
    setLocation(target.value)
  }

  const onClick = (filter) => {
    if (term && location) {
      dispatch(fetchBusinesses({ term: term, location: location, sortby: filter ? filter : 'best_match' }))
      // console.log(`Searching Yelp with ${term}, ${location}, ${filter}`)
    } else {
      const modal = document.getElementsByClassName('modal')[0]
      modal.style.display = 'block';
    }
  }

  const closeDialog = () => {
    const modal = document.getElementsByClassName('modal')[0]
    modal.style.display = 'none';
  }

  return (
    <div className='search-container'>

      <div className='modal'>
        <div className='modal-content'>
          <span className="close" onClick={() => closeDialog()}>&times;</span>
          <p>Field must not be empty</p>
        </div>
      </div>

      <div className='sort-container'>
        <button className={filter === 'best_match' ? 'active' : ''}
          id='btn-best-match' value='best_match'
          onClick={({ target }) => onClickSort(target.value)}>Best Match</button>
        <button className={filter === 'rating' ? 'active' : ''}
          id='btn-highest-rated' value='rating'
          onClick={({ target }) => onClickSort(target.value)}>Highest Rated</button>
        <button className={filter === 'review_count' ? 'active' : ''}
          id='btn-most-reviewed' value='review_count'
          onClick={({ target }) => onClickSort(target.value)}>Most Reviewed</button>
      </div>
      <div className='input-container'>
        <input className='search-input'
        onChange={handleTermChange}
          id="search-term" type='search'
          placeholder='Search (e.g pizza)' />
        <input className='search-input'
          onChange={handleLocationChange}
          id="search-location" type='search'
          placeholder='Where' />
      </div>
      <div className='search-button-container'>
        <button id="btn-search" onClick={() => onClick(filter)}>Let's Go</button>
      </div>
    </div>
  )
}

export default Search