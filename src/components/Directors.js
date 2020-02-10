import React from 'react';
import { directors } from '../data';
import { render } from 'enzyme';

const renderDirectorInfo = () => {
  return directors.map((director, ind) => {
    return (
      <div key={ind}>
        <li>Director: { director.name }</li>
        <li>Movies: { director.movies.map(movie => {return movie + ', '}) }</li>
        <br />
      </div>
    )
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { renderDirectorInfo() }
    </div>
  );
}

export default Directors
