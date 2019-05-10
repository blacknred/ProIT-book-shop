import {
    Route,
    Switch,
    Redirect,
    BrowserRouter,
} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

import Loading from './components/Loading';

const dumbAwait = path => new Promise(resolve => setTimeout(() => resolve(path, 2000)));

const Book = lazy(() => dumbAwait(import('./containers/Book')));
const BookList = lazy(() => dumbAwait(import('./containers/BookList')));
const BookEdit = lazy(() => dumbAwait(import('./containers/BookEdit')));

export default () => (
    <BrowserRouter>
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route path="/books" exact component={BookList} />
                <Route path="/books/new" exact component={BookEdit} />
                <Route path="/books/:bookdId?" exact component={Book} />
                <Route path="/books/:bookdId?/edit" exact component={BookEdit} />
                <Redirect to="/books" />
            </Switch>
        </Suspense>
    </BrowserRouter>
);
