import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from '@patternfly/react-core';
import {
    Table, TableHeader, TableBody, TableVariant, SortByDirection, sortable,
} from '@patternfly/react-table';

import books from '../books.json';

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                'idd',
                { title: 'Title', transforms: [sortable] },
                { title: 'Author', transforms: [sortable] },
                { title: 'Pages', transforms: [sortable] },
            ],
            rows: [],
            sortBy: {},
        };
        this.onSort = this.onSort.bind(this);
        this.onRowClickHandler = this.onRowClickHandler.bind(this);
    }

    componentDidMount() {
        this.setState({
            rows: books.map(book => ({ cells: Object.values(book) })),
        });
    }

    onRowClickHandler(...args) {
        const { history } = this.props;
        history.push(`/books/${args[1].cells[0]}`);
    }

    onSort(e, idx, direction) {
        const { rows } = this.state;
        console.log(e, idx, direction);
        const sortedRows = rows.sort((a, b) => a[idx] < b[idx] ? -1 : a[idx] > b[idx] ? 1 : 0);
        this.setState({
            sortBy: {
                idx,
                direction,
            },
            rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse(),
        });
    }

    render() {
        const { columns, rows, sortBy } = this.state;
        return (
            <>
                <Button component={Link} to="/books/new">Add new book</Button>
                <Table
                    variant={TableVariant.compact}
                    caption="Books list"
                    cells={columns}
                    rows={rows}
                    sortBy={sortBy}
                    onSort={this.onSort}
                    // selected
                    id={Date.now()}
                // striped="true"
                // bordered="true"
                // hover={true}
                // rowWrapper={RowWrapper}
                // onCollapse={this.onCollapse}
                // actionResolver={this.actionResolver}
                >
                    <TableHeader />
                    <TableBody onRowClick={this.onRowClickHandler} />
                </Table>
            </>
        );
    }
}

export default withRouter(BookList);
