import React from 'react';
import {
    Page,
    Brand,
    PageHeader,
    PageSection,
    PageSectionVariants,
} from '@patternfly/react-core';

import Notification from '../components/Notification';

export default ({ children }) => {
    const Header = (
        <PageHeader logo={<Brand src={null} alt="BOOKSHOP" />} />
    );

    return (
        <Page header={Header} className="layout">
            <PageSection className="content">
                <Notification />
                {children}
            </PageSection>
            <PageSection variant={PageSectionVariants.dark} className="footer" />
        </Page>
    );
};
