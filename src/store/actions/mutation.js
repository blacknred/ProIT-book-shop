import constants from '../constants';
import { putBook, postBook } from '../../api';
import { showNotification } from './notification';

export const mutationBegin = () => ({
    type: constants.MUTATION_BEGIN,
});

export const mutationSuccess = id => ({
    type: constants.MUTATION_SUCCESS,
    id,
});

export const mutationFailure = error => ({
    type: constants.MUTATION_FAILURE,
    error,
});

export const update = data => (dispatch) => {
    dispatch(mutationBegin());
    return putBook(data)
        .then((res) => {
            dispatch(showNotification({
                text: 'success updating',
                variant: 'success',
            }));
            dispatch(mutationSuccess(res));
        })
        .catch((e) => {
            dispatch(showNotification({
                text: e.message,
                variant: 'danger',
            }));
            dispatch(mutationFailure(e.message));
        });
};

export const add = data => (dispatch) => {
    dispatch(mutationBegin());
    return postBook(data)
        .then((res) => {
            dispatch(showNotification({
                text: 'success adding',
                variant: 'success',
            }));
            dispatch(mutationSuccess(res));
        })
        .catch((e) => {
            dispatch(showNotification({
                text: e.message,
                variant: 'danger',
            }));
            dispatch(mutationFailure(e.message));
        });
};
