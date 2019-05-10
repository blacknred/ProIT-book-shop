import constants from '../constants/index';

export default (state = [], action) => {
    switch (action.type) {
    case constants.CREATE_NOTIFICATION:
        return {
            notifications: [
                ...state.notifications,
                {
                    ...action.notification,
                    id: Date.now(),
                },
            ],
        };
    case constants.DELETE_NOTIFICATION:
        return {
            notifications: [
                ...state.messages.filter(note => note.id !== action.id),
            ],
        };
    default:
        return state;
    }
};
