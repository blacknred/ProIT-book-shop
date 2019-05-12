import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    Text,
    Card,
    Button,
    CardBody,
    TextContent,
    TextVariants,
} from '@patternfly/react-core';

export default ({ text }) => (
    <Card>
        <CardBody>
            <TextContent>
                <Text component={TextVariants.h3}>{text}</Text>
            </TextContent>
        </CardBody>
        <CardBody>
            <Button variant="secondary" component={Link} to="/books">
                Back to list
            </Button>
        </CardBody>
    </Card>
);
