import React from 'react';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';

export default ({ text, variant, remove }) => (
    <Alert
        key={text}
        variant={variant || 'warning'}
        title={text || 'Warning alert description'}
        action={<AlertActionCloseButton onClose={remove} />}
        className="container"
    />
);
