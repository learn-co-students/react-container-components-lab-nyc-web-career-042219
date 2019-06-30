// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {

 return (
   <div className='review-list'>
     {props.reviews.map(review => {
       return (
         <p className='review' key={review.name}><strong>{review.headline}</strong>
           <br/><img src={review.multimedia.src} alt=''/>
           <li>Film Title: {review.display_title}</li>
           <li>Reviewer: {review.byline}</li>
           <li>Summary: <em>{review.summary_short}</em></li>
           <li>In theaters: {review.opening_date}</li>
           <li>Read the full <a href={review.link.url}>review.</a></li>
         </p>
         )
     })}
   </div>
 );
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
