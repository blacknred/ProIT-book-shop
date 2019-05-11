import booksData from '../books.json';

export const getBooks = () => new Promise(resolve => setTimeout(() => {
    if (!localStorage.getItem('books')) {
        localStorage.setItem('books', JSON.stringify(booksData));
    }
    return resolve(JSON.parse(localStorage.getItem('books')));
}, 1000));

export const getBook = id => new Promise(resolve => setTimeout(() => {
    const books = JSON.parse(localStorage.getItem('books'));
    return resolve(books.find(book => book.id === parseInt(id, 10)));
}, 1000));

export const postBook = book => new Promise(resolve => setTimeout(() => {
    const books = JSON.parse(localStorage.getItem('books'));
    localStorage.setItem('books', JSON.stringify(books.concat(book)));
    return resolve(book);
}, 1000));

export const putBook = book => new Promise(resolve => setTimeout(() => {
    const books = JSON.parse(localStorage.getItem('books'));
    const updatedBooks = books.map((b) => {
        if (b.id === parseInt(book.id, 10)) return book;
        return b;
    });
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    return resolve(book);
}, 1000));
