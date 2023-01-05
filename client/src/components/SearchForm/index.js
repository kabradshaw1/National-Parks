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
      
      const { items } = await response.json();
      
      const parkData = items.map((park) => ({
        id: park.id,
        name: park.name || ['No activities found'],
      }));
      
      
      setSearchedPark(parkData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form 
      className="flex-row justify-center justify-space-between-md align-stretch"
      onSubmit={handleFormSubmit}
    >
      <div className="select">
        <select name='searchInput' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} >
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
  )
}

export default SearchForm;