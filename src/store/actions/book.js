import constants from '../constants/index';

export const fetchBooks = books => ({
    type: constants.FETCH_BOOKS,
    books,
});

export const addBook = book => ({
    type: constants.ADD_BOOK,
    book,
});

export const updateBook = book => ({
    type: constants.UPDATE_BOOK,
    book,
});
