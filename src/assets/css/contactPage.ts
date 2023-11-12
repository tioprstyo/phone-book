import { css } from '@emotion/react'; 

export const ContactPageStyles = () => {
    const ContactPageWrapper = css({
        padding: '1.25rem',
        backgroundColor: '#FBFBFB',
    });

    const ContentWrapper = css({
        minHeight: '100vh',
        fontSize: 'calc(10px + 2vmin)',
        color: '#FFFFFF'
    });

    const ContactPageTitle = css({
        fontSize: '2rem',
        fontWeight: 600,
        color: '#00d1b2',
        margin: 0
    });

    const SearchWrapper = css({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    });

    const SearchBox = css({
        width: '100%',
        borderRadius: 10,
        flex: 0.5,
        padding: 10,
        border: '1px solid #DFDFDF',
        '@media(max-width: 600px)': {
            flex: 1
        },
    });

    const ButtonAddContact = css({
        border: 'none',
        padding: '10px 30px',
        backgroundColor: '#00d1b2',
        color: '#FFFFFF',
        fontWeight: 600,
        height: 'fit-content',
        borderRadius: 20,
        alignItems: 'center',
        display: 'inline-flex',
        cursor: 'pointer',
        '@media(max-width: 600px)': {
            display: 'none',
        },
    });

    const ButtonAddContactMobile = css({
        display: 'none',
        '@media(max-width: 600px)': {
            display: 'inline-flex',
            alignSelf: 'center',
            border: 'none',
            backgroundColor: '#ffffff',
            color: '#00d1b2',
            fontWeight: 600,
            height: 'fit-content',
            borderRadius: 20,
            '&:focus': {
                opacity: 0.6,
            }
        },
    });

    const IconButtonAddContact = css({
        marginRight: 5,
        '@media(max-width: 600px)': {
            margin: 0,
            width: 25,
            height: 25
        },
    });


    const FavoriteSections = css({
        marginBottom: 40,
        marginTop: 30,
    });

    const TitleFavoriteSections = css({
        fontSize: '1.2rem',
        color: '#00d1b2',
        fontWeight: 600,
        '@media(max-width: 600px)': {
            fontSize: '1rem',
        }
    })

    const ContactListWrapper = ({
        marginTop: 20,
    });

    const LoadingWrapper = css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
    });

    const LoadingImage = css({
        width: 200,
        height: 'auto'
    });

    const PaginationWrapper = css({
        marginTop: 25,
        display: 'flex',
        justifyContent: 'center'
    });

    const ModalWrapper = css({
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: 400,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: '10px 10px 20px 20px',
    });

    const ButtonDeleteWrapper = css({
        textAlign: 'right',
    });

    const ButtonDeleteCancel = css({
        color: '#ffffff',
        fontWeight: 600,
        border: '1px solid #C1C1C1',
        backgroundColor: '#C1C1C1',
        width: 100,
        '&:hover': {
            color: '#C1C1C1',
        }
    });

    const ButtonDeleteApprove = css({
        color: '#ffffff',
        fontWeight: 600,
        backgroundColor: 'red',
        border: '1px solid red',
        width: 100,
        marginRight: 10,
        '&:hover': {
            color: 'red',
        }
    });
    
    return {
        ContactPageWrapper,
        ContentWrapper,
        ContactPageTitle,
        SearchWrapper,
        SearchBox,
        ButtonAddContact,
        ButtonAddContactMobile,
        IconButtonAddContact,
        FavoriteSections,
        TitleFavoriteSections,
        ContactListWrapper,
        LoadingWrapper,
        LoadingImage,
        PaginationWrapper,
        ModalWrapper,
        ButtonDeleteWrapper,
        ButtonDeleteCancel,
        ButtonDeleteApprove
    };
};



