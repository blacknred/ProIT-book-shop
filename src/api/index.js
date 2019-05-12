import booksData from '../books.json';

function checkDb() {
    if (!localStorage.getItem('books')) {
        localStorage.setItem('books', JSON.stringify(booksData));
    }
}

export const getBooks = () => new Promise(resolve => setTimeout(() => {
    checkDb();
    return resolve(JSON.parse(localStorage.getItem('books')));
}, 1000));

export const getBook = id => new Promise((resolve, reject) => setTimeout(() => {
    checkDb();
    const books = JSON.parse(localStorage.getItem('books'));
    const book = books.find(b => b.id === parseInt(id, 10));
    if (!book) {
        return reject(new Error('Book not found'));
    }
    return resolve(book);
}, 1000));

export const postBook = book => new Promise((resolve, reject) => setTimeout(() => {
    checkDb();
    const books = JSON.parse(localStorage.getItem('books'));
    if (books.some(b => book.title === b.title)) {
        return reject(new Error('Title have to be unique'));
    }
    localStorage.setItem('books', JSON.stringify(books.concat(book)));
    return resolve(book);
}, 1000));

export const putBook = book => new Promise(resolve => setTimeout(() => {
    checkDb();
    const books = JSON.parse(localStorage.getItem('books'));
    const updatedBooks = books.map((b) => {
        if (b.id === parseInt(book.id, 10)) return book;
        return b;
    });
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    return resolve(book);
}, 1000));
