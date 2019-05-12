import constants from '../constants';

export const showNotification = notification => ({
    type: constants.SHOW_NOTIFICATION,
    notification,
});

export const hideNotification = () => ({
    type: constants.HIDE_NOTIFICATION,
});
