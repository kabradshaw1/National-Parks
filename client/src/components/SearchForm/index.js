import React, { useEffect } from 'react';

// import { useMutation } from '@apollo/client';
// import { SAVE_PARK } from '../../utils/mutations';
import { searchPark } from '../../utils/API';

const SearchForm = (event) => {
  // const [parkBody, setBody] = useState('');
  // const [savePark, { error }] = useMutation(SAVE_PARK);

  useEffect(()=>{
    console.log('hello')
    searchPark().then((res)=>{return res.json()}).then(data => {
      console.log(data)
    }) 
  }, [searchPark]);

  const handleFormSubmit = () =>{
   
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
      <div class="select">
    <select>
        <option>--Select--</option>
        <option>Hello 1</option>
        <option>Hello 2</option>
        <option>Hello 3</option>
        <option>Hello 4</option>
    </select>
    <div class="select_arrow">
    </div>
</div>
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