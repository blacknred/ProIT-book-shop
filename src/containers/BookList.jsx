import * as React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
    Stack,
    StackItem,
    Button,
    Card,
    CardHeader,
    CardBody,
} from '@patternfly/react-core';
import {
    Table,
    TableHeader,
    TableBody,
    sortable,
    SortByDirection,
    headerCol,
    TableVariant,
    expandable,
    cellWidth
} from '@patternfly/react-table';

import { fetchBooks } from '../store/actions/book';
import bookData from '../books.json';

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
            sortBy: {
                index: 1,
                direction: 'asc',
            },
        };
        this.onSort = this.onSort.bind(this);
        this.onFetch = this.onFetch.bind(this);
        this.onRowClickHandler = this.onRowClickHandler.bind(this);
    }

    componentWillMount() {
        const { fetcher } = this.props;
        const onFetch = new Promise((resolve) => {
            setTimeout(() => resolve(bookData.map(book => Object.values(book)), 2000));
        });
        fetcher(onFetch);
    }

    onRowClickHandler(...args) {
        console.log(args);
        const { history } = this.props;
        history.push(`/books/${args[1][0]}`);
    }

    onSort(_e, idx, direction) {
        console.log(direction);
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
        const { books } = this.props;
        const { columns, sortBy } = this.state;
        return (
            <Card>
                <CardHeader>
                    Books
                </CardHeader>
                <CardBody>
                    <Stack gutter="md">
                        <StackItem>
                            <Button component={Link} to="/books/new">Add new book</Button>
                        </StackItem>
                        <StackItem isFilled>
                            <Table
                                // variant={TableVariant.compact}
                                caption="Books list"
                                cells={columns}
                                rows={books}
                                sortBy={sortBy}
                                onSort={this.onSort}
                            >
                                <TableHeader />
                                <TableBody onRowClick={this.onRowClickHandler} />
                            </Table>
                        </StackItem>
                    </Stack>
                </CardBody>
            </Card>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    books: state.books,
});

const mapDispatchToProps = dispatch => ({
    fetcher: books => dispatch(fetchBooks(books)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookList));
