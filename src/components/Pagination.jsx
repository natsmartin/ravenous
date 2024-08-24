import React from 'react'
import '../styles/Pagination.css'

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {

    let pages = [];
    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pages.push(index);
    }

    return (
        <div className='pagination'>
            {
                pages.map((page, index) => {
                    return <button 
                    key={index} onClick={() => setCurrentPage(page)}
                    className={page === currentPage ? 'active' : ''}>{page}</button>
                })
            }
        </div>
    )
}

export default Pagination