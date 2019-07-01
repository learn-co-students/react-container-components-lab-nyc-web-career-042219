// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {

  return (
    <div className='review-list'>
      {props.reviews.map(review => {
        return (
          <p className='review' key={review.name}><strong>{review.headline}</strong>
            <br/><img src={review.multimedia ? review.multimedia.src : ""}/>
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


export default MovieReviews;




//   {
// display_title: "The Buffalo Hunt",
// mpaa_rating: "",
// critics_pick: 0,
// byline: "KAREN HAN",
// headline: "‘The Buffalo Hunt’ Review: The Sacred Ties That Bind",
// summary_short: "This haunting documentary looks at the ritual of the hunt and its place in the history and identity of today’s Lakota Sioux.",
// publication_date: "2019-06-28",
// opening_date: "2019-06-21",
// date_updated: "2019-06-28 18:16:02",
// link: {
// type: "article",
// url: "http://www.nytimes.com/2019/06/28/movies/the-buffalo-hunt-review.html",
// suggested_link_text: "Read the New York Times Review of The Buffalo Hunt"
// },
// multimedia: {
// type: "mediumThreeByTwo210",
// src: "https://static01.nyt.com/images/2019/06/27/arts/27buffalo-hunt/27buffalo-hunt-mediumThreeByTwo210.jpg",
// width: 210,
// height: 140
// }
// }
