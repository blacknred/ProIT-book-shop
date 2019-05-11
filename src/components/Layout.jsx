import React from 'react';
import {
    Page,
    Brand,
    PageHeader,
    PageSection,
    PageSectionVariants,
} from '@patternfly/react-core';

import logo from '../logo.svg';

export default ({ children }) => {
    const Header = (
        <PageHeader logo={<Brand src={logo} alt="Patternfly Logo" />} />
    );

    return (
        <Page header={Header} className="layout">
            <PageSection className="content">
                {children}
            </PageSection>
            <PageSection variant={PageSectionVariants.dark} className="footer" />
        </Page>
    );
};
