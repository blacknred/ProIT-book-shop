import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { Stack, StackItem, Button } from '@patternfly/react-core';
// import {
//     Table, TableHeader, TableBody, TableVariant, SortByDirection, sortable,
// } from '@patternfly/react-table';

import books from '../books.json';

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                // { title: 'Title', transforms: [sortable] },
                // { title: 'Author', transforms: [sortable] },
                // { title: 'Pages', transforms: [sortable] },
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
        this.setState({
            rows: books.map(book => Object.values(book).slice(1)),
        });
    }

    onRowClickHandler(...args) {
        console.log(args);
        const { history } = this.props;
        history.push(`/books/${args[1].cells[0]}`);
    }

    onSort(e, idx, direction) {
        console.log(direction);
        // const { rows, sortBy: { direction: prevDirection } } = this.state;
        // const sortedRows = rows.sort((a, b) => {
        //     if (a[idx] < b[idx]) return -1;
        //     if (a[idx] > b[idx]) return 1;
        //     return 0;
        // });
        // this.setState({
        //     sortBy: {
        //         idx,
        //         direction: prevDirection === 'asc' ? 'desc' : 'asc',
        //     },
        //     rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse(),
        // });
    }

    render() {
        const { columns, rows, sortBy } = this.state;
        return (
            <div />
            // <Stack gutter="md">
            //     <StackItem>
            //         <Button component={Link} to="/books/new">Add new book</Button>
            //     </StackItem>
            //     <StackItem isFilled>
            //         <Table
            //             variant={TableVariant.compact}
            //             caption="Books list"
            //             cells={columns}
            //             rows={rows}
            //             sortBy={sortBy}
            //             onSort={this.onSort}
            //         >
            //             <TableHeader />
            //             <TableBody onRowClick={this.onRowClickHandler} />
            //         </Table>
            //     </StackItem>
            // </Stack>
        );
    }
}

export default withRouter(BookList);
