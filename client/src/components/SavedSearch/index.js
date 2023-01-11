import React from 'react';

const SavedSearch = ({ saved, title }) => {
  if (!saved.length) {
    return <h3>Nothing Saved Yet</h3>;
  }
  
  return (
    <div>
      {title}
      {/* <h3>{title}</h3>
      {saved &&
        saved.map(saved)
      } */}
    </div>
  )
}

export default SavedSearch;