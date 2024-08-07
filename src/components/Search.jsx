import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBusinesses } from '../redux/slice/todo';
import '../styles/Search.css';

function Search() {

  const dispatch = useDispatch()
  const [filter, setFilter] = useState('')
  const [term, setTerm] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    onClickSort(filter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, term, location]);

  const onClickSort = (sortby) => {
    const termInput = document.getElementById('search-term').value
    const locationInput = document.getElementById('search-location').value
    setTerm(termInput)
    setLocation(locationInput)
    setFilter(sortby)
    onClick(sortby)
  }

  const active = {
    'color': '#ffc23e',
    'border-bottom': '1px solid #ffc23e'
  }

  const inActive = {
    'color': 'white',
    'border-bottom': '1px solid white'
  }


  const onClick = (filter) => {
    dispatch(fetchBusinesses({ term: term, location: location, sortby: filter ? filter : 'best_match' }))
    console.log(`Searching Yelp with ${term}, ${location}, ${filter}`)
  }

  return (
    <div className='search-container'>
      <div className='sort-container'>
        <button className='sort-button' style={filter === 'best_match' ? active : inActive} id='btn-best-match' value='best_match' onClick={({target}) => onClickSort(target.value)}>Best Match</button>
        <button className='sort-button' style={filter === 'rating' ? active : inActive} id='btn-highest-rated' value='rating' onClick={({target}) => onClickSort(target.value)}>Highest Rated</button>
        <button className='sort-button' style={filter === 'review_count' ? active : inActive} id='btn-most-reviewed' value='review_count' onClick={({target}) => onClickSort(target.value)}>Most Reviewed</button>
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