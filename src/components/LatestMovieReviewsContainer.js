import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'uMYNVrZfKaK1jeZ09aFP1YSAgCSdIoG4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  fetchReviews = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
  }

  componentDidMount() {
    this.fetchReviews()
  }

  render() {
    console.log(this.state.reviews)
    return (
      <div className="latest-movie-reviews">
        <h3>The Latest <em>New York Times</em> Movie Reviews</h3>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
