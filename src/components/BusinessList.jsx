import React from 'react'
import '../styles/Business.css'
import Business from './Business';
import { useSelector } from 'react-redux';

function BusinessList() {

  const state = useSelector((state) => state.todo);
  // console.log(state.todo);
  const data = state.data;

  if (state.isLoading) {
    return (
      <p className="loading-text" >Loading . . .</p>
    )
  }

  return (
    <div className='business-container'>
      {
        data?.businesses?.map((business, index) => {
          return (
            <Business key={business + index} business={business}/>
          )
        })
      }
    </div>
  )
}

export default BusinessList