import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4 footer">
      <div className="copyright]">
        &copy;{new Date().getFullYear()} by August Lascola, Ashley Mullikin, Aaron Frialde, Landen Blankinship, Edward Beared, and Kyle Bradshaw
      </div>
    </footer>
  );
};

export default Footer;