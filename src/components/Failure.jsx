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

export default ({ text, back = true }) => (
    <Card>
        <CardBody>
            <TextContent>
                <Text component={TextVariants.h3}>{text}</Text>
            </TextContent>
        </CardBody>
        {back && (
            <CardBody>
                <Button variant="secondary" component={Link} to="/books">
                    Back
                </Button>
            </CardBody>
        )}
    </Card>
);
