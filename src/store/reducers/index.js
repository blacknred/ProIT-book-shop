import { combineReducers } from 'redux';
import notification from './notification';
import mutation from './mutation';
import books from './books';
import book from './book';

export default combineReducers({
    notification,
    mutation,
    books,
    book,
});
