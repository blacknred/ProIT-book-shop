import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../components/Loader';
import Notification from '../components/Notification';
import BookComponent from '../components/Book';
import { fetchBook } from '../store/actions/book';

class Book extends React.Component {
    componentDidMount() {
        const { match: { params: { bookId } }, fetching } = this.props;
        fetching(bookId);
    }

    render() {
        const { error, loading, book } = this.props;
        if (loading) {
            return <Loading />;
        }
        if (error) {
            return <Notification text={error.message} variant="danger" />;
        }
        return (
            <BookComponent book={book} />
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
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Book));
