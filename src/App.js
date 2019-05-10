import React from 'react';
import { Provider } from 'react-redux';

import ErrorBoundary from './containers/ErrorBoundary';
import Notification from './containers/Notification';
import Layout from './components/Layout';
import Routes from './Routes';
import store from './store';

export default () => (
    <Provider store={store}>
        <ErrorBoundary>
            <Layout>
                <Routes />
            </Layout>
            <Notification />
        </ErrorBoundary>
    </Provider>
);
