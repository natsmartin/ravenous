import React from 'react'

function SearchInput(props) {
    const {id, placeholder, onChange } = props
  return (
    <input className='search-input'
        onChange={onChange}
          id={id} type='search'
          placeholder={placeholder} />
  )
}

export default SearchInput