import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Loading from '../components/Loader';
import BookEditComponent from '../components/BookEdit';
import FailureComponent from '../components/Failure';
import { addBook } from '../store/actions/books';
import { fetchBook, updateBook } from '../store/actions/book';
import { showNotification } from '../store/actions/notification';

class BookEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            title: '',
            author: '',
            pagesCount: '',
            isTitleValid: false,
            isPagesCountValid: false,
        };
        this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
        this.onChangeAuthorHandler = this.onChangeAuthorHandler.bind(this);
        this.onChangePagesCountHandler = this.onChangePagesCountHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    async componentDidMount() {
        const { match: { params: { bookId } }, fetching } = this.props;
        if (bookId) {
            this.setState({ isEdit: true });
            await fetching(bookId);
        }
    }

    componentWillReceiveProps({ book }) {
        this.setState({
            title: book.title,
            author: book.author,
            pagesCount: book.pagesCount,
            isTitleValid: true,
            isPagesCountValid: true,
        });
    }

    onChangeTitleHandler(value) {
        this.setState({
            title: value,
            isTitleValid: /^[a-zA-Z\s]*$/.test(value),
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

    async onSubmitHandler(e) {
        e.preventDefault();
        const {
            history, book, add, update, notify,
        } = this.props;
        const {
            title, author, pagesCount, isTitleValid, isPagesCountValid, isEdit,
        } = this.state;
        if (!isTitleValid || !isPagesCountValid) {
            notify({
                text: !isTitleValid
                    ? 'Title has to have letters and spaces'
                    : 'Pages count have to be an integer',
                variant: 'danger',
            });
            return;
        }
        const id = isEdit ? book.id : Date.now();
        if (isEdit) {
            await update({
                ...book,
                title,
                author,
                pagesCount,
            });
        } else {
            await add({
                id,
                title,
                author,
                pagesCount,
            });
        }
        // this.setState({
        //     title: '',
        //     author: '',
        //     pagesCount: '',
        //     isTitleValid: false,
        //     isPagesCountValid: false,
        // });
        // history.push(`/books/${id}`);
    }

    render() {
        const { history, loading, error } = this.props;
        if (loading) {
            return <Loading />;
        }
        if (error) {
            return <FailureComponent text={error} />;
        }
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

const mapStateToProps = state => ({
    book: state.book.book,
});

const mapDispatchToProps = dispatch => ({
    fetching: id => dispatch(fetchBook(id)),
    add: book => dispatch(addBook(book)),
    update: book => dispatch(updateBook(book)),
    notify: notification => dispatch(showNotification(notification)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookEdit));
