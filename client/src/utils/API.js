// This along with the local storage app makes up the bulk of the code used in the bookstore app for the api call.  12/27/22 This isn't currently doing anything in the app.
// route to get logged in user's info (needs the token)
// gcGLNr6kSWCK2wgcyoCZkK9RJxGw7a5vKdJrLxth api key for national parks service
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// save book data for a logged in user
export const saveBook = (bookData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  });
};

// remove saved book data for a logged in user
export const deleteBook = (bookId, token) => {
  return fetch(`/api/users/books/${bookId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to national park api

export const searchPark = (query) => {
  return fetch(`https://developer.nps.gov/api/v1/${query}`,{
    headers: {
      "X-Api-Key": "gcGLNr6kSWCK2wgcyoCZkK9RJxGw7a5vKdJrLxth"
    }
  });
};
