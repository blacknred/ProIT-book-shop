import * as React from 'react';
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

export default ({
    isEdit, title, author, pagesCount, isTitleValid, isPagesCountValid,
    onBack, onSubmit, onChangeTitle, onChangeAuthor, onChangePagesCount,
}) => (
    <Card>
        <CardHeader>
            {`${isEdit ? 'Edit' : 'Add'} a book data`}
        </CardHeader>
        <CardBody>
            <Form isHorizontal>
                <FormGroup
                    label="Book title"
                    isRequired
                    fieldId="title"
                    helperTextInvalid="Please provide unique book title"
                    isValid={isTitleValid}
                >
                    <TextInput
                        isRequired
                        type="text"
                        id="title"
                        name="title"
                        aria-describedby="title"
                        value={title}
                        isDisabled={isEdit}
                        onChange={onChangeTitle}
                    />
                </FormGroup>
                <FormGroup
                    label="Book author"
                    fieldId="author"
                >
                    <TextInput
                        type="text"
                        id="author"
                        name="author"
                        aria-describedby="author"
                        value={author}
                        onChange={onChangeAuthor}
                    />
                </FormGroup>
                <FormGroup
                    label="Pages count"
                    isRequired
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
                        value={pagesCount}
                        onChange={onChangePagesCount}
                    />
                </FormGroup>
                <ActionGroup>
                    <Button variant="primary" onClick={onSubmit}>Save</Button>
                    <Button variant="secondary" onClick={onBack}>Cancel</Button>
                </ActionGroup>
            </Form>
        </CardBody>
    </Card>
);
