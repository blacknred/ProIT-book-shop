import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Loading from '../components/Loader';
import FailureComponent from '../components/Failure';
import BookEditComponent from '../components/BookEdit';
import { update, add } from '../store/actions/mutation';
import { showNotification } from '../store/actions/notification';

class BookEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            pagesCount: '',
            isEdit: false,
            isTitleValid: false,
            isPagesCountValid: false,
        };
        this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
        this.onChangeAuthorHandler = this.onChangeAuthorHandler.bind(this);
        this.onChangePagesCountHandler = this.onChangePagesCountHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    async componentDidMount() {
        const { book } = this.props;
        if (book) {
            this.setState({
                ...book,
                isEdit: true,
                isTitleValid: true,
                isPagesCountValid: true,
            });
        }
    }

    componentWillReceiveProps({ id, history }) {
        if (id) {
            history.push(`/books/${id}`);
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
            book, addBook, updateBook, notify,
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
        if (isEdit) {
            await updateBook({
                ...book,
                title,
                author,
                pagesCount,
            });
        } else {
            await addBook({
                id: Date.now(),
                title,
                author,
                pagesCount,
            });
        }
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

const mapStateToProps = (state, ownProps) => ({
    id: state.mutation.id,
    loading: state.mutation.loading,
    error: state.mutation.error,
    book: ownProps.match.params.bookId ? state.book.book : null,
});

const mapDispatchToProps = dispatch => ({
    addBook: book => dispatch(add(book)),
    updateBook: book => dispatch(update(book)),
    notify: notification => dispatch(showNotification(notification)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookEdit));
