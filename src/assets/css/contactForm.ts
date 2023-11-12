import { css } from '@emotion/react';

export const ContactFormStyles = () => {
    const ContactFormWrapper = css({
        color: '#00d1b2',
    });

    const ContactFormTitle = css({
        fontSize: '1.5rem',
    });

    const ContactFormTitleWrapper = css({
        display: 'flex'
    });

    const ContactFormBackPage = css({
        alignSelf: 'center',
        color: '#00d1b2',
        marginRight: 10,
    });

    const ContactFormBackIcon = css({
        width: 25,
        height: 25,
        transform: 'translate(0, 2px)',
        '@media(max-width: 600px)': {
            width: 20,
            height: 20,
        },
    });

    const ImageProfileWrapper = css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    });

    const ImageProfileBox = css({
        backgroundColor: '#ABABAB',
        width: '6rem',
        height: '6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        borderRadius: '50%'
    })

    const ImageProfile = css({
        width: '6rem',
        height: '6rem',
    });

    const FormWrapper = css({
        marginTop: 50,
    });

    const FormInputWrapper = css({
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
    });

    const LabelFormInput = css({
        fontSize: 14,
    });

    const LabelPhoneFormInputWrapper = css({
        display: 'flex',
        justifyContent: 'space-between'
    });

    const FormInput = css({
        marginTop: 10,
        padding: 10,
        borderBottom: '1px solid #DFDFDF',
        borderTop: 'none',
        borderRight: 'none',
        borderLeft: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
        width: '-webkit-fill-available'
    });

    const ButtonAddPhones = css({
        border: 'none',
        backgroundColor: 'transparent',
        color: '#5DCEB3'
    });

    const formInputPhones = css({
        marginBottom: 10,
    });

    const ButtonSaveContactWrapper = css({
        marginTop: 20,
    });

    const ButtonSaveContact = css({
        width: '100%',
        backgroundColor: '#00d1b2',
        color: '#ffffff',
        border: 'none',
        padding: 10,
        borderRadius: 5,
        maxWidth: 500,
        fontWeight: 600,
        fontSize: '1rem',
        '&:disabled': {
            backgroundColor: '#ABABAB'
        }
    });

    return {
        ContactFormWrapper,
        ContactFormTitleWrapper,
        ContactFormBackPage,
        ContactFormBackIcon,
        ContactFormTitle,
        ImageProfileWrapper,
        ImageProfileBox,
        ImageProfile,
        FormWrapper,
        FormInputWrapper,
        LabelFormInput,
        LabelPhoneFormInputWrapper,
        FormInput,
        ButtonAddPhones,
        formInputPhones,
        ButtonSaveContactWrapper,
        ButtonSaveContact
    };
};