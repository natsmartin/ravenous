import React from 'react'

function SortButton(props) {
    const { id, value, filter, text, onClickSort } = props
    return (
        <button className={filter === 'review_count' ? 'active' : ''}
            id={id} value={value}
            onClick={({ target }) => onClickSort(target.value)}>
            {text}
        </button>
    )
}

export default SortButton