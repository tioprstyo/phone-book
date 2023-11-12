import { css } from '@emotion/react';

export const TypeWriterStyle = () => {
    const TypeWriterTitle = css({
        textAlign: 'center',
    });

    let ButtonOpenMyContact = css({
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 600,
        backgroundColor: 'transparent',
        border: '2px solid #ffffff',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 50,
        cursor: 'pointer',
        width: '80%',
        '@media(max-width: 600px)': {
            fontSize: 15,
        },
        marginTop: 50,
    });
    
    return { 
        TypeWriterTitle, 
        ButtonOpenMyContact 
    };
};