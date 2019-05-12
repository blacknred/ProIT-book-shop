import constants from '../constants';
import { getBooks, postBook } from '../../api';
import { showNotification } from './notification';

export const fetchBooksBegin = () => ({
    type: constants.FETCH_BOOKS_BEGIN,
});

export const fetchBooksSuccess = books => ({
    type: constants.FETCH_BOOKS_SUCCESS,
    books,
});

export const fetchBooksFailure = error => ({
    type: constants.FETCH_BOOKS_FAILURE,
    error,
});

export const addBookBegin = () => ({
    type: constants.ADD_BOOK_BEGIN,
});

export const addBookSuccess = book => ({
    type: constants.ADD_BOOK_SUCCESS,
    book,
});

export const addBookFailure = error => ({
    type: constants.ADD_BOOK_FAILURE,
    error,
});

// action creators

export const fetchBooks = () => (dispatch) => {
    dispatch(fetchBooksBegin());
    return getBooks()
        .then((res) => {
            dispatch(showNotification({
                text: 'success fetching',
                variant: 'success',
            }));
            dispatch(fetchBooksSuccess(res));
        })
        .catch((e) => {
            dispatch(showNotification({
                text: e.message,
                variant: 'danger',
            }));
            dispatch(fetchBooksFailure(e));
        });
};

export const addBook = bookData => (dispatch) => {
    dispatch(addBookBegin());
    return postBook(bookData)
        .then((res) => {
            dispatch(showNotification({
                text: 'success adding',
                variant: 'success',
            }));
            dispatch(addBookSuccess(res));
        })
        .catch((e) => {
            dispatch(showNotification({
                text: e.message,
                variant: 'danger',
            }));
            dispatch(addBookFailure(e));
        });
};
