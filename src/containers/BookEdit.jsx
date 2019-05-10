import * as React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Form,
    FormGroup,
    TextInput,
    ActionGroup,
    Button,
    Card,
    CardHeader,
    CardBody,
} from '@patternfly/react-core';

class BookEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            title: '',
            author: '',
            pages: '',
            isTitleValid: true,
            isAuthorValid: true,
            isPagesCountValid: true,
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentDidMount() {

    }

    onChangeHandler(name, value) {
        this.setState({
            [name]: value,
            [`is${name.toUpperCase()}Valid`]: /^\d+$/.test(value)
        });
    }

    onSubmitHandler() {
        const { history } = this.props;
        // add to store
        history.push('/books/7');
    }

    render() {
        const { history } = this.props;
        const {
            title, author, pages, isTitleValid, isAuthorValid, isPagesCountValid, isEdit,
        } = this.state;
        return (
            <Card>
                <CardHeader>
                    {`${isEdit ? 'Edit' : 'Add'} book data`}
                </CardHeader>
                <CardBody>
                    <Form isHorizontal onSubmit={this.onSubmitHandler}>
                        <FormGroup
                            label="Book title"
                            // isRequired
                            fieldId="title"
                            helperTextInvalid="Please provide book title"
                            isValid={isTitleValid}
                        >
                            <TextInput
                                isRequired
                                type="text"
                                id="title"
                                name="title"
                                aria-describedby="title"
                                value={title}
                                onChange={val => this.onChangeHandler('title', val)}
                            />
                        </FormGroup>
                        <FormGroup
                            label="Book author"
                            // isRequired
                            fieldId="author"
                            helperTextInvalid="Please provide book title"
                            isValid={isAuthorValid}
                        >
                            <TextInput
                                isRequired
                                type="text"
                                id="author"
                                name="author"
                                aria-describedby="author"
                                value={author}
                                onChange={val => this.onChangeHandler('author', val)}
                            />
                        </FormGroup>
                        <FormGroup
                            label="Pages count"
                            // isRequired
                            fieldId="pagesCount"
                            helperTextInvalid="Please provide book pages count"
                            isValid={isPagesCountValid}
                        >
                            <TextInput
                                isRequired
                                type="number"
                                id="simple-form-number"
                                placeholder="0"
                                name="pagesCount"
                                aria-describedby="pagesCount"
                                value={pages}
                                onChange={val => this.onChangeHandler('pagesCount', val)}
                            />
                        </FormGroup>
                        <ActionGroup>
                            <Button variant="primary" type="submit">Save</Button>
                            <Button variant="secondary" onClick={() => history.goBack()}>Cancel</Button>
                        </ActionGroup>
                    </Form>
                </CardBody>
            </Card>

        );
    }
}

export default withRouter(BookEdit);
