import React, { useEffect } from 'react';

import Results from '../components/Results';
import SearchForm from '../components/SearchForm';
// import Auth from '../utils/auth';

const Home = () => {
  // const { data: userData } = useQuery(QUERY_ME_BASIC);

  // const loggedIn = Auth.loggedIn();
  // useEffect(()=>{
  //   searchPark().then((res)=>{return res.json()}).then(data => {
  //     console.log(data)
  //   }) 
  // }, [searchPark])
  return (
    <main>
      <SearchForm/>
      <Results/>
    </main>
    // <main>
    //   <div className="flex-row justify-space-between">
    //     {loggedIn && (
    //       <div className="col-12 mb-3">
    //         <ThoughtForm />
    //       </div>
    //     )}
    //     <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
    //       {loading ? (
    //         <div>Loading...</div>
    //       ) : (
    //         <ThoughtList
    //           thoughts={thoughts}
    //           title="Some Feed for Thought(s)..."
    //         />
    //       )}
    //     </div>
    //     {loggedIn && userData ? (
    //       <div className="col-12 col-lg-3 mb-3">
    //         <FriendList
    //           username={userData.me.username}
    //           friendCount={userData.me.friendCount}
    //           friends={userData.me.friends}
    //         />
    //       </div>
    //     ) : null}
    //   </div>
    // </main>
  );
};

export default Home;
