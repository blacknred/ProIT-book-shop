import {
    createStore,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger'
import reducer from './reducers';

const middleware = [thunk];
// middleware.push(createLogger());

export default createStore(
    reducer,
    applyMiddleware(...middleware),
);
