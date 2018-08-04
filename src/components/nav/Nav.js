import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (

  <nav>
    <ul>
      <li>
        <NavLink activeClassName="selected" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/dashboard">Dashboard</NavLink>
      </li>
    </ul>
  </nav>

);
