import booksData from '../books.json';

export const getBooks = () => new Promise(resolve => setTimeout(() => resolve(booksData), 1000));

export const getBook = id => new Promise(resolve => setTimeout(() => {
    resolve(booksData.find(book => book.id === id));
}, 1000));

export const postBook = book => new Promise(resolve => setTimeout(() => resolve(book), 500));

export const putBook = book => new Promise(resolve => setTimeout(() => resolve(book), 500));
