import React, { useState, useEffect } from 'react';
// import { useMutation } from "@apollo/react-hooks";
import Auth from '../utils/auth';
import { searchParkAPI } from '../utils/API';
// import { savedParkIds, getSavedParkId } from '../utils/localStorage';
import { SAVE_PARK } from "../utils/mutations";

const SearchPark = () => {
  // create state for holding returned park api data
  const [searchedParks, setSearchedParks] = useState([]);
  // CREATE STATE FOR HOLDING OUR SEARCH FIELD DATA
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved data from api call
  const [savedParkId, setSavedParkId] = useState(getSavedParkId());

  const [savePark] = useMutation(SAVE_PARK);

  useEffect(() => {
    return () => saveParkIds(saveParkIds);
  });

  // create method to search for parks and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }
    
    try {
      const response = await searchParkAPI(searchInput);
    

      if(!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const parkData = items.map((park) => ({

      }))

      setSearchedParks(parkData);
      setSearchInput('');
    } catch(err) {
      console.error(err);
    }
  }

  // create function to handle saving a park to our database
  const handleSavePark = async (parkId) => {
    // find the park in `searchedParks` state by the matching id
    const parkToSave = searchedParks.find((park) => park.parkId === parkId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : mull;

    if(!token) {
      return false;
    }

    try { 
      await savePark({
        variables: { input: parkToSave },
      });

      setSavedParkIds([...savedParkIds, oarkToSave.parkId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className=''>
        <Container>
          <h1>Search for Park!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a park'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {searchedParks.length
            ? `Viewing ${searchedParks.length} results:`
            : 'Search for a park to begin'}
        </h2>
        <CardColumns>
          {searchedParks.map((park) => {
            return (
              <div>cool searched stuff</div>
              // <Card key={park.parkId} border='dark'>
              //   {park.image ? (
              //     <Card.Img src={park.image} alt={`The cover for ${park.title}`} variant='top' />
              //   ) : null}
              //   <Card.Body>
              //     <Card.Title>{book.title}</Card.Title>
              //     <p className='small'>Authors: {book.authors}</p>
              //     <Card.Text>{book.description}</Card.Text>
              //     {Auth.loggedIn() && (
              //       <Button
              //         disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
              //         className='btn-block btn-info'
              //         onClick={() => handleSaveBook(book.bookId)}>
              //         {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
              //           ? 'This book has already been saved!'
              //           : 'Save this Book!'}
              //       </Button>
              //     )}
              //   </Card.Body>
              // </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  )
}

export default SearchPark;