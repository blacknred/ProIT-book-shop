import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../components/Loader';
import NotFoundComponent from '../components/NotFound';
import BookComponent from '../components/Book';
import { fetchBook } from '../store/actions/book';

class Book extends React.Component {
    componentDidMount() {
        const { match: { params: { bookId } }, dispatch } = this.props;
        dispatch(fetchBook(bookId));
    }

    render() {
        const { error, book } = this.props;
        if (error) {
            return <NotFoundComponent text={error} />;
        }
        if (book) {
            return <BookComponent book={book} />;
        }
        return <Loading />;
    }
}

const mapStateToProps = state => ({
    book: state.book.book,
    loading: state.book.loading,
    error: state.book.error,
});

export default withRouter(connect(mapStateToProps)(Book));
