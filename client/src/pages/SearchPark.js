import React, { useState, useEffect } from 'react';
import { useMutation } from "@apollo/react-hooks";
import Auth from '../utils/auth';
import { searchPark } from '../utils/API';
import { savedParkData, getSavedParkData } from '../utils/localStorage';
import { } from "../utils/mutations";

const SearchPark = () => {
  // create state for holding returned park api data
  const [searchedParks, setSearchedParks] = useState([]);
  // CREATE STATE FOR HOLDING OUR SEARCH FIELD DATA
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved data from api call
  const [savedParkData, setSavedParkData] = useState(getSavedParkData());

  const [savePark] = useMutation(SAVED_PARK);

  useEffect(() => {
    return () => savePark(savePark);
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }
    
    try {
      const response = await searchPark(searchInput);
    

      if(!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const parkData = items.map((park) => ({

      }))
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <>
      <Jumbotron fluid className=''>
        <Container>
          <h1>Search for Books!</h1>
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
          {searchedBooks.length
            ? `Viewing ${searchedBooks.length} results:`
            : 'Search for a book to begin'}
        </h2>
        <CardColumns>
          {searchedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? (
                  <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveBook(book.bookId)}>
                      {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                        ? 'This book has already been saved!'
                        : 'Save this Book!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  )
}