import constants from '../constants';
import { getBook, putBook } from '../../api';
import { showNotification } from './notification';

export const fetchBookBegin = () => ({
    type: constants.FETCH_BOOK_BEGIN,
});

export const fetchBookSuccess = book => ({
    type: constants.FETCH_BOOK_SUCCESS,
    book,
});

export const fetchBookFailure = error => ({
    type: constants.FETCH_BOOK_FAILURE,
    error,
});

export const updateBookBegin = () => ({
    type: constants.UPDATE_BOOK_BEGIN,
});

export const updateBookSuccess = book => ({
    type: constants.UPDATE_BOOK_SUCCESS,
    book,
});

export const updateBookFailure = error => ({
    type: constants.UPDATE_BOOK_FAILURE,
    error,
});

// action creators

export const fetchBook = id => (dispatch) => {
    dispatch(fetchBookBegin());
    return getBook(id)
        .then((res) => {
            dispatch(showNotification({
                text: 'success fetching',
                variant: 'success',
            }));
            dispatch(fetchBookSuccess(res));
        })
        .catch((e) => {
            dispatch(showNotification({
                text: 'error fetching',
                variant: 'danger',
            }));
            dispatch(fetchBookFailure(e.message));
        });
};

export const updateBook = bookData => (dispatch) => {
    dispatch(updateBookBegin());
    return putBook(bookData)
        .then((res) => {
            dispatch(showNotification({
                text: 'success updating',
                variant: 'success',
            }));
            dispatch(updateBookSuccess(res));
        })
        .catch((e) => {
            dispatch(showNotification({
                text: 'error updating',
                variant: 'danger',
            }));
            dispatch(updateBookFailure(e.message));
        });
};
