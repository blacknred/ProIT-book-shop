import React from 'react';
import { connect } from 'react-redux';

import { hideNotification } from '../store/actions/notification';
import NotificationComponent from '../components/Notification';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = null;
    }

    componentWillReceiveProps() {
        const { dispatch } = this.props;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => dispatch(hideNotification()), 2000);
    }

    render() {
        const { notification, dispatch } = this.props;
        return notification && (
            <NotificationComponent
                notification={notification}
                onClose={() => dispatch(hideNotification())}
            />
        );
    }
}

const mapStateToProps = state => ({
    notification: state.notification,
});

export default connect(mapStateToProps)(Notification);
