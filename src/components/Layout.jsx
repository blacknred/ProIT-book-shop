import React from 'react';
import {
    Page,
    Brand,
    Text,
    TextContent,
    PageHeader,
    PageSection,
    SkipToContent,
    PageSectionVariants,
} from '@patternfly/react-core';

import Notification from '../containers/Notification';
import logo from '../logo.svg';
import './layout.css';

export default ({ children }) => {
    const Header = (
        <PageHeader logo={<Brand src={logo} alt="Patternfly Logo" />} />
    );

    const PageSkipToContent = (
        <SkipToContent href="#main-content-page-layout-default-nav">
            Skip to Content
        </SkipToContent>
    );

    return (
        <Page header={Header} skipToContent={PageSkipToContent}>
            <Notification />
            <PageSection variant={PageSectionVariants.default}>
                <TextContent>
                    <Text component="h1">Books</Text>
                </TextContent>
            </PageSection>
            <PageSection>
                {children}
            </PageSection>
            <PageSection variant={PageSectionVariants.dark} className="footer" />
        </Page>
    );
};
