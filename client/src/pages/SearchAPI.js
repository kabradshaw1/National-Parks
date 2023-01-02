import React, { useState, useEffect } from 'react';
import { useMutation } from "@apollo/react-hooks";
import Auth from '../utils/auth';
import { searchPark } from '../utils/API';
import { savedParkData, getSavedParkData } from '../utils/localStorage';
import { } from "../utils/mutations";

const SearchAPI = () => {
  // create state for holding returned park api data
  const [searchedParks, setSearchedParks] = useState([]);
  // CREATE STATE FOR HOLDING OUR SEARCH FIELD DATA
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved data from api call
  const [savedParkData, setSavedParkData] = useState(getSavedParkData());

  const [savePark] = useMutation(SAVED_PARK);


}