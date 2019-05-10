import React from 'react';
import {
    Card,
    Text,
    Button,
    CardBody,
    TextContent,
    TextVariants,
} from '@patternfly/react-core';

export default ({ message }) => (
    <Card>
        <CardBody>
            <TextContent>
                <Text component={TextVariants.h1}>Something went wrong!</Text>
                <Text component={TextVariants.h2}>{message}</Text>
            </TextContent>
            <br />
            <Button component="a" href="/" variant="secondary">Go home</Button>
        </CardBody>
    </Card>
);
