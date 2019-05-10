import * as React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';

export default ({ children }) => (
    <Stack gutter="lg">
        <StackItem>
            header
        </StackItem>
        <StackItem isFilled>
            {children}
        </StackItem>
        <StackItem>
            footer
        </StackItem>
    </Stack>
);
