import constants from '../constants';

const initialState = {
    book: null,
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case constants.FETCH_BOOK_BEGIN:
        return {
            ...state,
            loading: true,
            error: null,
        };

    case constants.FETCH_BOOK_SUCCESS:
        return {
            ...state,
            loading: false,
            book: action.book,
        };

    case constants.FETCH_BOOK_FAILURE:
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
