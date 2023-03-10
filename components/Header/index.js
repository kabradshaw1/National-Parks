import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
    <header className="">
      
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>TBD</h1>
        </Link>
        
        <nav className="text-center">
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
    <section class="hero">
      <div class="overlay">
        <div class="hero-cta">
          <h2>Access Our National Parks</h2>
          <p>
            Getting Everyone the Information They Need to Enjoy our National Parks
          </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;