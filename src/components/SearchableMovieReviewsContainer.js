import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'NNZ8HoSlhMVPveuLeMYilh6I3caSX3fV';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component{

  state = {
    reviews: '',
    searchTerm: ''
  }

  handleSubmit = (event) =>{
    event.preventDefault()

    fetch(URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(data => this.setState({ reviews: data.results }))

  }

  handleChange = (event) =>{
    this.setState({ searchTerm: event.target.value })
  }

  render(){
    console.log(this.state)
    return(
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews:</label>
          <input
            id="search-input"
            type="text"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      {this.state.reviews.length > 0 ? <MovieReviews reviews={this.state.reviews} /> : ''}
      </div>
    )
  }
}
