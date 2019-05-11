import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sortable, SortByDirection } from '@patternfly/react-table';

import Loading from '../components/Loader';
import BookListComponent from '../components/BookList';
import { fetchBooks } from '../store/actions/books';

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                '#',
                { title: 'Title', transforms: [sortable] },
                { title: 'Author', transforms: [sortable] },
                'Pages',
            ],
            rows: [],
            sortBy: {
                index: 1,
                direction: 'asc',
            },
        };
        this.onSort = this.onSort.bind(this);
        this.onRowClickHandler = this.onRowClickHandler.bind(this);
    }

    componentDidMount() {
        const { fetching } = this.props;
        fetching();
        // this.setState({ rows: books.map(book => Object.values(book)) });
    }

    onRowClickHandler(_, arg) {
        const { history } = this.props;
        history.push(`/books/${arg[0]}`);
    }

    onSort(_e, idx, direction) {
        const { books } = this.props;
        const sortedRows = books.sort((a, b) => {
            if (a[idx] < b[idx]) return -1;
            if (a[idx] > b[idx]) return 1;
            return 0;
        });
        this.setState({
            sortBy: {
                idx,
                direction,
            },
            rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse(),
        });
    }

    render() {
        const { error, loading, books } = this.props;
        if (loading) {
            return <Loading />;
        }
        if (error) {
            return 'error';
        }
        return (
            <BookListComponent
                {...this.state}
                rows={books.map(book => Object.values(book))}
                onRowClick={this.onRowClickHandler}
                onSort={this.onSort}
            />
        );
    }
}

const mapStateToProps = state => ({
    books: state.books.books,
    loading: state.books.loading,
    error: state.books.error,
});

const mapDispatchToProps = dispatch => ({
    fetching: () => dispatch(fetchBooks()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookList));
