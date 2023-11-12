import { css } from '@emotion/react';

export const ContactDetailPageStyles = () => {
    
    const ContactDetailPageWrapper = css({
        padding: '1.25rem',
        backgroundColor: '#FBFBFB',
    });

    const ContactDetailPageContent = css({
        minHeight: '100vh',
        color: '#FFFFFF',
    });

    return {
        ContactDetailPageWrapper,
        ContactDetailPageContent
    };
};