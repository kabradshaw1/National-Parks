import React, { useEffect } from 'react';

// import { useMutation } from '@apollo/client';
// import { SAVE_PARK } from '../../utils/mutations';
import { searchPark } from '../../utils/API';

// const SearchForm = (event) => {
  // const [parkBody, setBody] = useState('');
  // const [savePark, { error }] = useMutation(SAVE_PARK);

// useEffect(()=>{
    console.log('hello')
    searchPark().then((res)=>{return res.json()}).then(data => {
      console.log(data)
    }) 
  // }, [searchPark]);


// called when page loads
var loadPreviousSearch = function () {
  // populates the form with the last search information if exists on initial page load
  const lastSearchStr = window.localStorage.getItem("lastSearch");
  if (lastSearchStr) {
    const lastSearch = JSON.parse(lastSearchStr);
    // select make in dropdown
    const options = Array.from(searchPark.options);
    const optionToSelect = options.find(item => item.text === lastSearch.searchPark);
    if (optionToSelect) {
      optionToSelect.selected = true;

//   // sort array alphabetically
// var sortOptionArray = function (array) {
//   array.sort((a, b) => {
//     const textA = a.text.toUpperCase(); // ignore upper and lowercase
//     const textB = b.text.toUpperCase(); // ignore upper and lowercase
//     if (textA < textB) {
//       return -1;
//     }
//     if (textA > textB) {
//       return 1;
//     }
//     // names must be equal
//     return 0;
//   });
// };
  

    <>
    <form 
      className="flex-row justify-center justify-space-between-md align-stretch"
      // onSubmit={handleFormSubmit}
    >
      <div class="inputContainer">
                <h1>Select Attribute</h1>
                <select class="form-control" id="searchPark" onChange="searchPark;">
                    <option value="attributeSelect">--- Attributes ---</option>
                </select>
            </div>

        <button className="btn col-12 col-md-3" type="submit" id='searchPark'>
          Submit
        </button>
        <button className="btn col-12 col-md-3" type="submit" id='save_park'>
          Save Results
        </button>
    </form>
    </>
  }
}
}
