import booksData from '../books.json';

export const getBooks = () => new Promise(resolve => setTimeout(() => resolve(booksData), 1500));

export const getBook = id => new Promise(resolve => setTimeout(() => (
    resolve(booksData.find(book => book.id === parseInt(id, 10)))
), 1000));

export const postBook = book => new Promise(resolve => setTimeout(() => resolve(book), 1000));

export const putBook = book => new Promise(resolve => setTimeout(() => resolve(book), 1000));
