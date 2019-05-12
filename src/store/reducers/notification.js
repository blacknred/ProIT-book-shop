import constants from '../constants';

export default (state = null, action) => {
    switch (action.type) {
    case constants.SHOW_NOTIFICATION:
        return action.notification;
    case constants.HIDE_NOTIFICATION:
        return null;
    default:
        return state;
    }
};
