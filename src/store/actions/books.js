import constants from '../constants';
import { getBooks } from '../../api';
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
            dispatch(fetchBooksFailure(e.message));
        });
};
