import constants from '../constants';
import { getBook, putBook, postBook } from '../../api';
import { showNotification } from './notification';

export const processBookBegin = () => ({
    type: constants.PROCESS_BOOK_BEGIN,
});

export const processBookSuccess = book => ({
    type: constants.PROCESS_BOOK_SUCCESS,
    book,
});

export const processBookFailure = error => ({
    type: constants.PROCESS_BOOK_FAILURE,
    error,
});

// action creators

export const fetchBook = id => (dispatch) => {
    dispatch(processBookBegin());
    return getBook(id)
        .then((res) => {
            dispatch(showNotification({
                text: 'success fetching',
                variant: 'success',
            }));
            dispatch(processBookSuccess(res));
        })
        .catch((e) => {
            dispatch(showNotification({
                text: e.message,
                variant: 'danger',
            }));
            dispatch(processBookFailure(e.message));
        });
};

export const updateBook = bookData => (dispatch) => {
    dispatch(processBookBegin());
    return putBook(bookData)
        .then((res) => {
            dispatch(showNotification({
                text: 'success updating',
                variant: 'success',
            }));
            dispatch(processBookSuccess(res));
        })
        .catch((e) => {
            dispatch(showNotification({
                text: e.message,
                variant: 'danger',
            }));
            dispatch(processBookFailure(e.message));
        });
};

export const addBook = bookData => (dispatch) => {
    dispatch(processBookBegin());
    return postBook(bookData)
        .then((res) => {
            dispatch(showNotification({
                text: 'success adding',
                variant: 'success',
            }));
            dispatch(processBookSuccess(res));
        })
        .catch((e) => {
            dispatch(showNotification({
                text: e.message,
                variant: 'danger',
            }));
            dispatch(processBookFailure(e.message));
        });
};
