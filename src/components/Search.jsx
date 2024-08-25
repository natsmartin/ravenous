import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBusinesses } from '../redux/slice/todo';
import '../styles/Search.css';
import SortButton from './SortButton';
import SearchInput from './SearchInput';

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

  const handleTermChange = ({ target }) => {
    setTerm(target.value)
  }

  const handleLocationChange = ({ target }) => {
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
        <SortButton id='btn-best-match' value='best_match'
          onClickSort={onClickSort} text='Best Match' />
        <SortButton id='btn-highest-rated' value='rating'
          onClickSort={onClickSort} text='Highest Rated' />
        <SortButton id='btn-most-reviewed' value='review_count'
          onClickSort={onClickSort} text='Most Reviewed' />
      </div>
      <div className='input-container'>
        <SearchInput id='search-term' placeholder='Search (e.g pizza)'
          onChange={handleTermChange} />
        <SearchInput id='search-location' placeholder='Where'
          onChange={handleLocationChange} />
      </div>
      <div className='search-button-container'>
        <button id="btn-search" onClick={() => onClick(filter)}>Let's Go</button>
      </div>
    </div>
  )
}

export default Search