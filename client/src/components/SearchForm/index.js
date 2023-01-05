import React, { useEffect, useState } from 'react';

// import { useMutation } from '@apollo/client';
// import { SAVE_PARK } from '../../utils/mutations';
import { searchPark } from '../../utils/API';

const SearchForm = () => {
  // create state for holding returned google api data
  const [searchedPark, setSearchedPark] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
  // const [parkBody, setBody] = useState('');
  // const [savePark, { error }] = useMutation(SAVE_PARK);

  // useEffect(()=>{
  //   console.log('hello')
  //   searchPark().then((res)=>{return res.json()}).then(data => {
  //     console.log(data)
  //   }) 
  // }, [searchPark]);

  // const handleChange = (event) => {
    
  // }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if(!searchInput) {
      return false
    };

    try {
      const response = await searchPark(searchInput);
   
      if (!response.ok) { 
        throw new Error('something went wrong!');
      }
      
      const items  = await response.json();
      const items2 = items.data;
     
      setSearchedPark(items2);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="card mb-3">
        <div className="card-header">
          <span className="text-light">Search</span>
        </div>
        <form 
          className="card-body"
          onSubmit={handleFormSubmit}
        >
          <div className="select pill mb-3">
            <select className='' name='searchInput' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} >
                <option>--Select--</option>
                <option>parks</option>
                <option>Hello 2</option>
                <option>Hello 3</option>
                <option>Hello 4</option>
            </select>
            <div className="select_arrow">
            </div>
          </div>
            <button className="btn col-12 col-md-3" type="submit">
              Submit
            </button>
        </form>
      </div>
      <div className="card mb-3">
        <div className="card-header">
          <span className="text-light">Results</span>
        </div>
        <div className="card-body">
          {searchedPark.map((park) =>{
            return(
              <p className="pill mb-3" key={park.id}>
                {park.name}
              </p>
            )
          })}
          <p className='pill mb-3'>Stuff we searched for?</p>
          <button className="btn col-12 col-md-3" type="submit" id='save_park'>
            Save Results
          </button>
        </div>
      
      </div>
    </>
  )
}

export default SearchForm;