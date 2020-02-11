import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderMovies = (directorMovies) => {
    return directorMovies.map((movie, index) => <li key={index}>{movie}</li>)
  }

  const renderDirectors = () => {
    return directors.map((director, index) => {
      return (
        <div key={index}>
          <h1>{director.name}</h1>
          <ul>
            {renderMovies(director.movies)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
