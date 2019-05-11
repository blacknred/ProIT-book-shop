import booksData from '../books.json';

export const getBooks = () => new Promise(resolve => setTimeout(() => resolve(booksData), 2000));

export const getBook = id => new Promise(resolve => setTimeout(() => (
    resolve(booksData.find(book => book.id === parseInt(id, 10)))
), 2000));

export const postBook = book => new Promise(resolve => setTimeout(() => resolve(book), 1000));

export const putBook = book => new Promise(resolve => setTimeout(() => resolve(book), 1000));
