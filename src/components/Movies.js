import React from 'react';
import { movies } from '../data';

const renderMovieInfo = () => {
  return movies.map((movie, ind) => {
    return (
      <div key={ind}>
        <li>Title: { movie.title }</li>
        <li>Length: { movie.time }</li>
        <li>Genres: { movie.genres.map(gen => {return gen + ', '}) }</li>
        <br />
      </div>
    )
  })
}


const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      { renderMovieInfo() }
    </div>
  );
};

export default Movies;
