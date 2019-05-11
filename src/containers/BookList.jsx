import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sortable, SortByDirection } from '@patternfly/react-table';

import BookListComponent from '../components/BookList';
import { fetchBooks } from '../store/actions/book';

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

    componentWillMount() {
        const { books } = this.props;
        this.setState({ rows: books.map(book => Object.values(book)) });
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
        return (
            <BookListComponent
                {...this.state}
                onRowClick={this.onRowClickHandler}
                onSort={this.onSort}
            />
        );
    }
}

const mapStateToProps = state => ({
    books: state.books,
});

const mapDispatchToProps = dispatch => ({
    fetcher: books => dispatch(fetchBooks(books)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookList));
