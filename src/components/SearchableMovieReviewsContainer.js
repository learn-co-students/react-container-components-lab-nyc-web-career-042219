import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "uMYNVrZfKaK1jeZ09aFP1YSAgCSdIoG4";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=<search-term>`" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews:[],
    searchTerm: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ reviews: data.results })});
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews:</label>
          <input id="search-input" type="text" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 ? <MovieReviews reviews={this.state.reviews}/> : ""}
      </div>
    );
  }
}
