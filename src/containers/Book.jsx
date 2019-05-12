import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../components/Loader';
import NotFound from '../components/NotFound';
import BookComponent from '../components/Book';
import { fetchBook } from '../store/actions/book';

class Book extends React.Component {
    componentDidMount() {
        const { match: { params: { bookId } }, fetching } = this.props;
        fetching(bookId);
    }

    render() {
        const { error, book } = this.props;
        if (error) {
            return <NotFound text={error} />;
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

const mapDispatchToProps = dispatch => ({
    fetching: id => dispatch(fetchBook(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Book));
