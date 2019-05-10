import * as React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
    Text,
    Card,
    Button,
    CardBody,
    CardHeader,
    CardFooter,
    ActionGroup,
    TextContent,
    TextVariants,
} from '@patternfly/react-core';

const Book = ({ match: { bookId }, book }) => (
    <Card>
        <CardHeader>
            <TextContent>
                <Text component={TextVariants.h1}>{book.title}</Text>
            </TextContent>
        </CardHeader>
        <CardBody>
            <TextContent>
                <Text component={TextVariants.h1}>{book.author}</Text>
            </TextContent>
        </CardBody>
        <CardBody>
            <TextContent>
                <Text component={TextVariants.h1}>{book.pages}</Text>
            </TextContent>
        </CardBody>
        <CardFooter>
            <ActionGroup>
                <Button variant="primary" component={Link} to="/books">
                    Back to list
                </Button>
                <Button variant="secondary" component={Link} to={`/books/${bookId}/edit`}>
                    Edit
                </Button>
            </ActionGroup>
        </CardFooter>
    </Card>
);

const mapStateToProps = (state, ownProps) => ({
    book: state.books.find(book => book.id === ownProps.match.bookId),
});

export default withRouter(connect(mapStateToProps)(Book));
