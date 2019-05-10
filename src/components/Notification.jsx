import * as React from 'react';
import { connect } from 'react-redux';

import { Alert, AlertActionCloseButton } from '@patternfly/react-core';

const Notification = ({ message = 'Warning alert description' }) => (
    <Alert
        variant="warning"
        title="Warning alert title"
        action={<AlertActionCloseButton onClose={() => ({})} />}
    >
        {message}
    </Alert>
);

const mapStateToProps = (state, ownProps) => ({
    // notifications: state.notifications.notificationsList,
});

const mapDispatchToProps = dispatch => ({
    // createMessage: (text) => dispatch(createFlashMessage(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
