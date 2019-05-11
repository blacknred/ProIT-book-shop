import { combineReducers } from 'redux';
import notifications from './notification';
import books from './books';
import book from './book';

export default combineReducers({
    notifications,
    books,
    book,
});
