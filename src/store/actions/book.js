import constants from '../constants/index';
import { getBook, putBook } from '../../api';

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
            // dispatch notification
            dispatch(fetchBookSuccess(res));
        })
        .catch((e) => {
            // dispatch notification
            dispatch(fetchBookFailure(e.message));
        });
};

export const updateBook = bookData => (dispatch) => {
    dispatch(updateBookBegin());
    return putBook(bookData)
        .then((res) => {
            // dispatch notification
            dispatch(updateBookSuccess(res));
        })
        .catch((e) => {
            // dispatch notification
            dispatch(updateBookFailure(e.message));
        });
};
