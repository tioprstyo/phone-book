import { css } from '@emotion/react';

export const CardComponentStyles = () => {
    const CardComponentWrapper = css({
        backgroundColor: 'white',
        boxShadow: '1px 2px 9px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)',
        color: '#4a4a4a',
        maxWidth: '100%',
        position: 'relative',
        marginTop: 10,
    });

    const CardComponentContentWrapper = css({
        backgroundColor: 'transparent',
        padding: '1rem 1.5rem',
        '@media(max-width: 600px)': {
            padding: '1rem',
        }
    });

    const CardComponentItemWrapper = css({
        display: 'flex',
        textAlign: 'left',
        alignItem: 'center',
    });

    const CardComponentItem = css({
        flex: 1,
        justifyContent: 'space-between'
    });

    const CardComponentButtonWrapper = css({
        textAlign: 'right',
        alignSelf: 'center',
        '@media(max-width: 600px)': {
            alignSelf: 'unset',
        }
    });

    const ButtonDeleteCard = css({
        marginLeft: 5,
        color: 'red',
        padding: 10,
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: '1px solid red',
        borderRadius: 3,
        alignItems: 'center',
        display: 'inline-flex',
        '@media(max-width: 420px)': {
            padding: 5
        },
        '&:hover': {
            color: '#ffffff',
            backgroundColor: 'red',
        }
    });

    const ButtonFavoriteCard = css({
        marginLeft: 5,
        color: 'orange',
        padding: 10,
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: '1px solid orange',
        borderRadius: 3,
        alignItems: 'center',
        display: 'inline-flex',
        '@media(max-width: 600px)': {
            padding: 5
        },
        '&:hover': {
            color: '#ffffff',
            backgroundColor: 'orange',
        }
    });

    const ButtonEditCard = css({
        marginLeft: 5,
        color: '#00d1b2',
        padding: 10,
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: '1px solid #00d1b2',
        borderRadius: 3,
        alignItems: 'center',
        display: 'inline-flex',
        '@media(max-width: 600px)': {
            padding: 5
        },
        '&:hover': {
            color: '#ffffff',
            backgroundColor: '#00d1b2',
        }
    });

    const IconButtonActions = css({
        '@media(max-width: 600px)': {
            width: 10,
            height: 10
        }
    });

    const TextButtonActions = css({
        marginLeft: 5,
        '@media(max-width: 600px)': {
            display: 'none',
        }
    });

    const IconPhoneCard = css({
        marginRight: 10,
        width: 15,
        height: 15,
        color: '#4A4A4A'
    });

    const CardNameWrapper = css({
        textDecoration: 'none',
        color: '#4A4A4A',
        alignItems: 'center',
        display: 'flex',
        marginBottom: 10,
    });

    const CardNameText = css({
        marginBottom: 0,
        marginTop: 0,
        marginHorizontal: 0,
        fontSize: '0.9rem',
        fontWeight: 600,
        alignSelf: 'center',
        '@media(max-width: 600px)': {
            fontSize: '0.8rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }
    });

    const CardPhoneText = css({
        marginBottom: 10,
        marginTop: 0,
        marginHorizontal: 0,
        alignItems: 'center',
        display: 'inline-flex',
        fontSize: '0.9rem',
        '@media(max-width: 600px)': {
            fontSize: '0.8rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }
    });

    return {
        CardComponentWrapper,
        CardComponentContentWrapper,
        CardComponentItemWrapper,
        CardComponentItem,
        CardComponentButtonWrapper,
        ButtonDeleteCard,
        ButtonFavoriteCard,
        ButtonEditCard,
        IconButtonActions,
        TextButtonActions,
        IconPhoneCard,
        CardNameText,
        CardNameWrapper,
        CardPhoneText
    };
};