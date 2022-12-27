import React from 'react';

const Footer = () => {
  return (
    // old className was w-100 mt-auto bg-secondary p-4
    <footer className="">
      <div className="container">
        &copy;{new Date().getFullYear()} by August Lascola, Radshad Beard, Aaron Frialde, Ashley Mullikin, and Kyle Bradshaw
      </div>
    </footer>
  );
};

export default Footer;