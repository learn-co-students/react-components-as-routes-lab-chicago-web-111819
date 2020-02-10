import React from 'react';
import { actors } from '../data';

const renderActorInfo = () => {
  return actors.map((actor, ind) => {
    return (
      <div className='actor' key={ind}>
        <li>Actor: { actor.name }</li>
        <li>Movies: { actor.movies.map(movie => {return movie + ', '}) }</li>
        <br />
      </div>
    )
  })
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { renderActorInfo() }
    </div>
  );
};

export default Actors;
