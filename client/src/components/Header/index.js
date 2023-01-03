import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
// old className for header was bg-secondary mb-4 py-2 flex-row align-center
// old className for div was container flex-row justify-space-between-lg justify-center align-center
// old className for nav was text-center
  return (
    <header className="">
      
      <div className="">
        <Link to="/">
          <h1>TBD</h1>
        </Link>
        
        <nav className="">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;