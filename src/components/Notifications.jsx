import React from 'react';
import { connect } from 'react-redux';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';

import { deleteNotification } from '../store/actions/notification';
import './notification.css';

const Notifications = ({ notifications, remove }) => (
    <>
        {notifications.map(notification => (
            <Alert
                key={notification.id}
                variant={notification.status || 'warning'}
                title={notification.text || 'Warning alert description'}
                action={<AlertActionCloseButton onClose={() => remove(notification.id)} />}
                className="container"
            />
        ))}
    </>
);

const mapStateToProps = state => ({
    notifications: state.notifications,
});

const mapDispatchToProps = dispatch => ({
    remove: id => dispatch(deleteNotification(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
