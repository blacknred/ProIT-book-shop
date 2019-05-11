import constants from '../constants/index';

const initialState = {
    books: [],
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case constants.FETCH_BOOKS_BEGIN:
        return {
            ...state,
            loading: true,
            error: null,
        };

    case constants.FETCH_BOOKS_SUCCESS:
        return {
            ...state,
            loading: false,
            books: action.books,
        };

    case constants.FETCH_BOOKS_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.error,
            books: [],
        };

    default:
        return state;
    }
};
