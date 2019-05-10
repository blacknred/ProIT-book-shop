import constants from '../constants/index';

export const createNotification = notification => ({
    type: constants.CREATE_NOTIFICATION,
    notification,
});

export const deleteNotification = id => ({
    type: constants.DELETE_NOTIFICATION,
    id,
});
