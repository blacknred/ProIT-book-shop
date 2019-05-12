import * as React from 'react';
import { Link } from 'react-router-dom';
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
    Split,
    SplitItem,
} from '@patternfly/react-core';

export default ({ book }) => (
    <Card>
        <CardHeader>About the book</CardHeader>
        <CardBody>
            <TextContent>
                <Split gutter="md">
                    <SplitItem>
                        <Text component={TextVariants.h3}><strong>Title</strong></Text>
                    </SplitItem>
                    <SplitItem isFilled>
                        <Text component={TextVariants.h1}>{book.title}</Text>
                    </SplitItem>
                </Split>
            </TextContent>
        </CardBody>
        <CardBody>
            <Split gutter="md">
                <SplitItem>
                    <Text component={TextVariants.h3}><strong>Author</strong></Text>
                </SplitItem>
                <SplitItem isFilled>
                    <Text component={TextVariants.h1}>{book.author}</Text>
                </SplitItem>
            </Split>
        </CardBody>
        <CardBody>
            <Split gutter="md">
                <SplitItem>
                    <Text component={TextVariants.h3}><strong>Pages count</strong></Text>
                </SplitItem>
                <SplitItem isFilled>
                    <Text component={TextVariants.h1}>{book.pagesCount}</Text>
                </SplitItem>
            </Split>
        </CardBody>
        <CardFooter>
            <ActionGroup>
                <Split gutter="md">
                    <SplitItem>
                        <Button variant="secondary" component={Link} to="/books">
                            Back to list
                        </Button>
                    </SplitItem>
                    <SplitItem>
                        <Button variant="primary" component={Link} to={`/books/${book.id}/edit`}>
                            Edit
                        </Button>
                    </SplitItem>
                </Split>
            </ActionGroup>
        </CardFooter>
    </Card>
);
