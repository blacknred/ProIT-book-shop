import constants from '../constants/index';

export const createNotification = (text, status = 'warning') => ({
    type: constants.CREATE_NOTIFICATION,
    text,
    status,
});

export const deleteNotification = id => ({
    type: constants.DELETE_NOTIFICATION,
    id,
});
