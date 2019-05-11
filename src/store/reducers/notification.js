import constants from '../constants/index';

export default (state = [], action) => {
    switch (action.type) {
    case constants.CREATE_NOTIFICATION:
        return [
            ...state,
            {
                ...action.notification,
                id: Date.now(),
            },
        ];
    case constants.DELETE_NOTIFICATION:
        return state.filter(note => note.id !== action.id);
    default:
        return state;
    }
};
