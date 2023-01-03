// this file is used in the book app only, and will demonstrate some of what we will need to do for an api call.  12/27/22 This isn't currently doing anything in the app.

export const getSavedBookIds = () => {
  const savedBookIds = localStorage.getItem('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : [];

  return savedBookIds;
};

export const savePark = (parkArr) => {
  if (parkArr.length) {
    localStorage.setItem('saved_park', JSON.stringify(parkArr));
  } else {
    localStorage.removeItem('saved_park');
  }
};

export const removeBookId = (bookId) => {
  const savedBookIds = localStorage.getItem('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : null;

  if (!savedBookIds) {
    return false;
  }

  const updatedSavedBookIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
  localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));

  return true;
};