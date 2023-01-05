import React, { useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';
import { SAVE_PARK } from '../../utils/mutations';
import { searchPark } from '../../utils/API';

const SearchForm = (event) => {
  // create state for holding returned google api data
  const [searchedPark, setSearchedPark] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
  // const [parkBody, setBody] = useState('');
  // const [savePark, { error }] = useMutation(SAVE_PARK);

  useEffect(()=>{
    console.log('hello')
    searchPark().then((res)=>{return res.json()}).then(data => {
      console.log(data)
    }) 
  }, [searchPark]);

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
      const { items } = await response.json();

      const parkData = items.map((park) => ({
        id: park.id,
        name: park.name || ['No activities found']
      }));

      // setSearchedPark(parkData);
      // setSearchInput('');
    } catch (err) {
      console.error(err);
    }
    
  };

  const handleChange = () => {

  };

  const reactionBody = () => {

  };

  return (
    <>
    <form 
      className="flex-row justify-center justify-space-between-md align-stretch"
      onSubmit={handleFormSubmit}
    >
      <textarea
          placeholder="Leave a reaction to this thought..."
          value={reactionBody}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
      ></textarea>
        <button className="btn col-12 col-md-3" type="submit" id='searchPark'>
          Submit
        </button>
        <button className="btn col-12 col-md-3" type="submit" id='save_park'>
          Save Results
        </button>
    </form>
    </>
  )
}

export default SearchForm;