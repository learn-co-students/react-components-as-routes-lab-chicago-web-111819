import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  padding: '12px',
  margin: '0 6px 6px'
}

const NavBar = () => {
  return (
    <div className="navbar">
    <NavLink
       to="/"
       exact
      style={link}
     >Home</NavLink>
     <NavLink
        to="/movies"
        exact
        style={link}
      >Movies</NavLink>
      <NavLink
         to="/directors"
         exact
        style={link}
       >Directors</NavLink>
       <NavLink
          to="/actors"
          exact
          style={link}
        >Actors</NavLink>
    </div>
  );
};

export default NavBar;
