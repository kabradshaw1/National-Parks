import React from 'react';
import SearchForm from '../components/SearchForm';
import SavedSearch from '../components/SavedSearch';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_SAVED } from '../utils/queries';

const Home = () => {
  const { data } = useQuery(QUERY_SAVED);

  const saved = data?.all_saved || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          <SearchForm/>
        </div>
      </div>
      {loggedIn ? (
        <div>
          <SavedSearch 
            saved={saved}
            title='stuff and things'
          />
        </div>
      ): null}
    </main>
  );
};

export default Home;
