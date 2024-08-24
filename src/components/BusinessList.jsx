import React, { useState, useEffect } from 'react';
import '../styles/Business.css'
import Business from './Business';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';

function BusinessList() {

  const state = useSelector((state) => state.todo);
  // console.log(state.todo);
  const data = state.data;
  const [businessesData, setBusinessesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(0);

  useEffect(() => {
    if (data) {
      setBusinessesData(data.businesses)
      setPostsPerPage(10)
    }
  }, [data, businessesData])

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = businessesData?.slice(firstPostIndex, lastPostIndex);

  if (state.isLoading) {
    return (
      <p className="loading-text" >Loading . . .</p>
    )
  }

  return (
    <>
      <div className='business-container'>
        {
          currentPosts?.map((business, index) => {
            return (
              <Business key={business + index} business={business} />
            )
          })
        }
      </div>
      <Pagination
        totalPosts={businessesData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} />
    </>
  )
}

export default BusinessList