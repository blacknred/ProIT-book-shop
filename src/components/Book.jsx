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
        {!book ? (
            <CardBody>
                <TextContent>
                    <Text component={TextVariants.h3}>Not found</Text>
                </TextContent>
            </CardBody>
        ) : (
            <>
                <CardHeader>About the book</CardHeader>
                <CardBody>
                    <TextContent>
                        <Text component={TextVariants.h1}>{book.title}</Text>
                    </TextContent>
                </CardBody>
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
                        <Split gutter="md">
                            <SplitItem>
                                <Button variant="primary" component={Link} to="/books">
                                    Back to list
                                </Button>
                            </SplitItem>
                            <SplitItem>
                                <Button variant="secondary" component={Link} to={`/books/${book.id}/edit`}>
                                    Edit
                                </Button>
                            </SplitItem>
                        </Split>


                    </ActionGroup>
                </CardFooter>
            </>
        )}
    </Card>
);
