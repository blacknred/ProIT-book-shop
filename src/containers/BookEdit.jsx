import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Loading from '../components/Loader';
import FailureComponent from '../components/Failure';
import BookEditComponent from '../components/BookEdit';
import { showNotification } from '../store/actions/notification';
import { fetchBook, updateBook, addBook } from '../store/actions/book';

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
        if (book) {
            this.setState({
                title: book.title,
                author: book.author,
                pagesCount: book.pagesCount,
                isTitleValid: true,
                isPagesCountValid: true,
            });
        }
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
        history.push(`/books/${id}`);
    }

    render() {
        const { history, loading, error } = this.props;
        if (loading) {
            return <Loading />;
        }
        return (
            <>
                {error && <FailureComponent text={error} back={false} />}
                <BookEditComponent
                    {...this.state}
                    onChangeTitle={this.onChangeTitleHandler}
                    onChangeAuthor={this.onChangeAuthorHandler}
                    onChangePagesCount={this.onChangePagesCountHandler}
                    onSubmit={this.onSubmitHandler}
                    onBack={() => history.goBack()}
                />
            </>
        );
    }
}

const mapStateToProps = state => ({
    book: state.book.book,
    loading: state.book.loading,
    error: state.book.error,
});

const mapDispatchToProps = dispatch => ({
    fetching: id => dispatch(fetchBook(id)),
    add: book => dispatch(addBook(book)),
    update: book => dispatch(updateBook(book)),
    notify: notification => dispatch(showNotification(notification)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookEdit));
