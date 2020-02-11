import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderMovies = (actorMovies) => {
    return actorMovies.map((movie, index) => <li key={index}>{movie}</li>)
  }

  const renderActors = () => {
    return actors.map((actor, index) => {
      return (
        <div key={index}>
          <h1>{actor.name}</h1>
          <ul>
            {renderMovies(actor.movies)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
