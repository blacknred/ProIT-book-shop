import React from 'react';
import { Provider } from 'react-redux';

import ErrorBoundary from './containers/ErrorBoundary';
import Layout from './components/Layout';
import Root from './components/Root';
import store from './store';

export default () => (
    <Provider store={store}>
        <ErrorBoundary>
            <Layout>
                <Root />
            </Layout>
        </ErrorBoundary>
    </Provider>
);
