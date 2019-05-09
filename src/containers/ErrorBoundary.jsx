import React from 'react';

import Error from '../components/ErrorBoundary';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        const { children } = this.props;
        const { error, errorInfo } = this.state;
        return !errorInfo ? children : (
            <Error
                message={error && error.toString()}
                errorInfo={errorInfo}
            />
        );
    }
}

export default ErrorBoundary;