import { css } from '@emotion/react';

export const MainStyles = () => {
    const MainPageWrapper = css({
        backgroundColor: '#00d1b2',
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    });

    const MainPageTitle = css({
        color: '#FFFFFF',
        fontSize: 50,
        '@media(max-width: 600px)': {
            fontSize: 30
        },
        '@media(max-width: 360px)': {
            fontSize: 20
        }

    });

    return {
        MainPageWrapper,
        MainPageTitle
    }
}