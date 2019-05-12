import constants from '../constants';

const initialState = {
    book: null,
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case constants.PROCESS_BOOK_BEGIN:
        return {
            ...state,
            loading: true,
            error: null,
        };

    case constants.PROCESS_BOOK_SUCCESS:
        return {
            ...state,
            loading: false,
            book: action.book,
        };

    case constants.PROCESS_BOOK_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.error,
            book: null,
        };

    default:
        return state;
    }
};
