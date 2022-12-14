import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/add'>Add</Link>
        </li>
      </ul>
    </nav>
  );
}
