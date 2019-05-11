import { combineReducers } from 'redux';
import books from './books';
import book from './book';

export default combineReducers({
    books,
    book,
});
