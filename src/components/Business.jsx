import '../styles/Business.css'

function Business(props) {
  const business = props.business;

  return (

    <div className='business-content'>
      <img src={business.image_url} alt={business.name}></img>
      <p className='business-name-text'>{business.name}</p>
      <div className='business-content-box'>
        <div className='business-content-location'>
          <p>{business.location.address1}</p>
          <p>{business.location.city}</p>
          <p>{business.location.state + ' ' + business.location.zip_code}</p>
        </div>
        <div className='business-content-review'>
          <p id='category-title-text'>{business.categories[0]?.title.toUpperCase()}</p>
          <p id='rating-text'>{business.rating + ' stars'}</p>
          <p id='review-count-text'>{business.review_count + ' reviews'}</p>
        </div>
      </div>
    </div>
  )

}

export default Business