import React from 'react';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';

export default ({ notification, onClose }) => (
    <Alert
        key={notification.text}
        variant={notification.variant || 'warning'}
        title={notification.text || 'Warning alert description'}
        action={<AlertActionCloseButton onClose={onClose} />}
        className="notification"
    />
);
