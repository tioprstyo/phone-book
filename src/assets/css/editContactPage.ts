import { css } from '@emotion/react';

export const EditContactPageStyles = () => {
    const EditContactPageWrapper = css({
        padding: '1.25rem',
        backgroundColor: '#FBFBFB',
    });

    const EditContactPageContent = css({
        minHeight: '100vh',
        color: '#FFFFFF',
    });

    return {
        EditContactPageWrapper,
        EditContactPageContent
    }
}