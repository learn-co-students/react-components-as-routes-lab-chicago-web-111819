import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderGenres = (movieGenres) => {
    return movieGenres.map((genre, index) => <li key={index}>{genre}</li>)
  }

  const renderMovies = movies.map((movieObj, index) => {
    return (
      <div key={index}>
        <h2>Name: {movieObj.title}</h2>
        <p>Time: {movieObj.time}</p>
        <p>Genres:</p>
        <ul>
          {renderGenres(movieObj.genres)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  );
};

export default Movies;
