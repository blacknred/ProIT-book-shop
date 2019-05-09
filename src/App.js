import React from 'react';
import { Provider } from 'react-redux';

import ErrorBoundary from './containers/ErrorBoundary';
import Notification from './components/Notification';
import Routes from './Routes';
import store from './store';

export default () => (
    <Provider store={store}>
        <ErrorBoundary>
            <Routes />
            <Notification />
        </ErrorBoundary>
    </Provider>
);
