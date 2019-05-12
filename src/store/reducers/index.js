import { combineReducers } from 'redux';
import notification from './notification';
import books from './books';
import book from './book';

export default combineReducers({
    notification,
    books,
    book,
});
