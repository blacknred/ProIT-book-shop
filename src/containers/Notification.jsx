import * as React from 'react';
import { connect } from 'react-redux';

import { deleteNotification } from '../store/actions/notification';
import NotificationComponent from '../components/Notification';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: true,
        };
        this.autoHide = null;
        this.hide = this.hide.bind(this);
    }

    // componentDidMount() {
    //     this.hide();
    // }

    componentWillUpdate() {
        clearTimeout(this.autoHide);
        this.hide();
    }

    hide() {
        const { remove } = this.props;

        this.autoHide = setTimeout(() => {
            remove();
            // this.setState(({ isShown }) => ({ isShown: !isShown }));
        }, 1000);
    }

    render() {
        const { isShown } = this.state;
        const { notification, remove } = this.props;

        return (
            isShown
                ? <NotificationComponent message={notification} onClose={remove} />
                : null
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    notifications: state.notifications,
});

const mapDispatchToProps = dispatch => ({
    remove: id => dispatch(deleteNotification(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
