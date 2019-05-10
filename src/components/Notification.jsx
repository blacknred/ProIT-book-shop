import * as React from 'react';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';

import './notification.css';

export default ({ message, onClose }) => (
    <Alert
        variant="warning"
        title={message || 'Warning alert description'}
        action={<AlertActionCloseButton onClose={onClose} />}
        className="container"
    />
);
