import constants from '../constants/index';

export default (state = [], action) => {
    switch (action.type) {
    case constants.FETCH_BOOKS:
        return [
            ...state,
            action.books,
        ];
    case constants.CREATE_BOOK:
        return [
            ...state,
            action.book,
        ];
    case constants.UPDATE_BOOK:
        return state.map((book) => {
            if (action.book.id === book.id) return action.book;
            return book;
        });
    default:
        return state;
    }
};
