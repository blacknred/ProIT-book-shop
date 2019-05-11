import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import BookEditComponent from '../components/BookEdit';
import { fetchBook                                   , addBook, updateBook } from '../store/actions/book';
import { createNotification } from '../store/actions/notification';

class BookEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            title: '',
            author: '',
            pagesCount: '',
            isTitleValid: true,
            isPagesCountValid: true,
        };
        this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
        this.onChangeAuthorHandler = this.onChangeAuthorHandler.bind(this);
        this.onChangePagesCountHandler = this.onChangePagesCountHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentDidMount() {
        const { book } = this.props;
        if (book) {
            this.setState({
                isEdit: true,
                title: book.title,
                author: book.author,
                pagesCount: book.pagesCount,
            });
        }
    }

    onChangeTitleHandler(value) {
        const { titles } = this.props;
        this.setState({
            title: value,
            isTitleValid: !(titles.inclides(value)),
        });
    }

    onChangeAuthorHandler(value) {
        this.setState({
            author: value,
        });
    }

    onChangePagesCountHandler(value) {
        this.setState({
            pagesCount: value,
            isPagesCountValid: /^\d+$/.test(value),
        });
    }

    onSubmitHandler(e) {
        e.preventDefault();
        const {
            history, book, add, update, notify, titles,
        } = this.props;
        const {
            title, author, pages, isTitleValid, isPagesCountValid, isEdit,
        } = this.state;
        if (!isTitleValid || !isPagesCountValid) {
            notify({
                text: 'Invalid book data',
                status: 'warning',
            });
            console.log('kk', isTitleValid, isPagesCountValid);
            return;
        }
        const id = book ? book.id : titles.length + 1;
        if (isEdit) {
            update({
                ...book,
                title,
                author,
                pages,
            });
        } else {
            add({
                id,
                title,
                author,
                pages,
            });
        }
        history.push(`/books/${id}`);
        notify({
            text: isEdit ? 'Book data has been updated' : 'New book has been added',
            status: 'success',
        });
    }

    render() {
        const { history } = this.props;
        return (
            <BookEditComponent
                {...this.state}
                onChangeTitle={this.onChangeTitleHandler}
                onChangeAuthor={this.onChangeAuthorHandler}
                onChangePagesCount={this.onChangePagesCountHandler}
                onSubmit={this.onSubmitHandler}
                onBack={() => history.goBack()}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    book: state.books.find(book => book.id === ownProps.match.bookId),
    titles: state.books.map(book => book.title),
});

const mapDispatchToProps = dispatch => ({
    fetcher: id => dispatch(fetchBook(id)),
    add: book => dispatch(addBook(book)),
    update: book => dispatch(updateBook(book)),
    notify: notification => dispatch(createNotification(notification)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookEdit));
