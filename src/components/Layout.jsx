import React from 'react';
import {
    Page,
    Brand,
    PageHeader,
    PageSection,
    PageSectionVariants,
} from '@patternfly/react-core';

import Notification from './Notifications';
import logo from '../logo.svg';
import './layout.css';

export default ({ children }) => {
    const Header = (
        <PageHeader logo={<Brand src={logo} alt="Patternfly Logo" />} />
    );

    return (
        <Page header={Header} className="container-c">
            <Notification />
            <PageSection className="content">
                {children}
            </PageSection>
            <PageSection variant={PageSectionVariants.dark} className="footer" />
        </Page>
    );
};
