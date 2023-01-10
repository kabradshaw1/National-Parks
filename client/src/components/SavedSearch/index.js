import React from 'react';
import { Link } from 'react-router-dom';

const SavedSearch = ({ all_saved, title }) => {
  if (!all_saved.length) {
    return <h3>No saved Yet</h3>;
  }
  
  return (
    <div>
      {/* <h3>{title}</h3>
      {saved &&
        saved.map(saved)
      } */}
    </div>
  )
}

export default SavedSearch;