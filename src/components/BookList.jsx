import React from 'react';
import { Link } from 'react-router-dom';
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
} from '@patternfly/react-table';

export default ({
    columns, sortBy, rows, onSort, onRowClick,
}) => (
    <Card>
        <CardHeader>Books</CardHeader>
        <CardBody>
            <Stack gutter="md">
                <StackItem>
                    <Button component={Link} to="/books/new">Add new book</Button>
                </StackItem>
                <StackItem isFilled>
                    <Table
                        caption="Books list"
                        cells={columns}
                        rows={rows}
                        sortBy={sortBy}
                        onSort={onSort}
                    >
                        <TableHeader />
                        <TableBody onRowClick={onRowClick} />
                    </Table>
                </StackItem>
            </Stack>
        </CardBody>
    </Card>
);
