import React from 'react';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';

export default ({ text, variant, remove }) => (
    <Alert
        key={text}
        variant={variant || 'warning'}
        title={text || 'Warning alert description'}
        action={<AlertActionCloseButton onClose={remove} />}
        className="container"
    />
);

const mapStateToProps = state => ({
    // book: state.book.book,
});

const mapDispatchToProps = dispatch => ({
    fetching: id => dispatch(fetchBook(id)),
    add: book => dispatch(addBook(book)),
    update: book => dispatch(updateBook(book)),
    // notify: notification => dispatch(createNotification(notification)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookEdit));