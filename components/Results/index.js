import React from 'react';

const Results = () => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Results</span>
      </div>
      <div className="card-body">
        <p className='pill mb-3'>Stuff we searched for?</p>
      </div>
      <button className="btn col-12 col-md-3" type="submit" id='save_park'>
        Save Results
      </button>
    </div>
  )
}

export default Results;