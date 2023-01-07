import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
        &copy;{new Date().getFullYear()} <a href="https://github.com/kabradshaw1" >Kyle Bradshaw, </a> <a href="https://github.com/ashleymullikin" >Ashley Mullikin, </a> <a href="https://github.com/erbeard" >Edward Beard, </a> <a href="https://github.com/landank" >Landon Blankship, </a> <a href="https://github.com/August-Lascola" >August Lascola, </a> <a href="https://github.com/kabradshaw1" >Aaron Fridale</a>
      </div>
    </footer>
  );
};

export default Footer;