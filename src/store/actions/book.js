import constants from '../constants';
import { getBook } from '../../api';
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
                text: e.message,
                variant: 'danger',
            }));
            dispatch(fetchBookFailure(e.message));
        });
};
