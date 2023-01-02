import React, { useState, useEffect } from 'react';
import { useMutation } from "@apollo/react-hooks";
import Auth from '../utils/auth';
import { searchParks } from '../utils/API';
import { savePark, getSavedBookIds } from '../utils/localStorage';
import { SAVE_BOOK } from "../utils/mutations";

const SearchAPI = () => {
  
}