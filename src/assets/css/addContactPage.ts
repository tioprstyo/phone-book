import { css } from "@emotion/react";

export const AddContactPageStyles = () => {
    const AddContactPageWrapper = css({
        padding: '1.25rem',
        backgroundColor: '#FBFBFB',
    });

    const AddContactPageContent = css({
        minHeight: '100vh',
        color: '#FFFFFF',
    });

    return {
        AddContactPageWrapper,
        AddContactPageContent
    };
};