import React, { useState, useEffect } from 'react';
import { getMe } from '../../utils/API';

import { getMe, deleteBook } from '../utils/API';
import Auth from '../utils/auth';

const SavedSearch = () => {

  const [userData, setUserData] = useState({})

  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const loken = Auth.oggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if(!response.ok) {
          throw new Error('something went wrong!')
        }

        const user = await response.json()
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  if(!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <h2>
      {userData.saveds.length
            ? `Viewing ${userData.saved.length} saved ${userData.saved.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
    </h2>
  )
}

export default SavedSearch;