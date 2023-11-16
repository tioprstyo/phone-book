/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { getContact, getAllContacts } from 'src/storage';
import { ContactForm } from "src/components";
import { Snackbar, Alert } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Contacts, SnackbarState } from 'src/types';
import { EditContactPageStyles } from 'src/assets/css';


const useQuery = () => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const EditContactPage = () => {
    const { EditContactPageWrapper, EditContactPageContent } = EditContactPageStyles();
    const query = useQuery();
    const navigate = useNavigate();
    const [user, setUser] = useState<Contacts>({
        created_at: '',
        first_name: '',
        id: 0,
        last_name: '',
        phones: [],
        isFavorite: false,
    });
    const [isError, setIsError] = useState<boolean>(false);
    const [snackbar, setSnackbar] = useState<SnackbarState>({
        open: false,
        vertical: 'top',
        horizontal: 'right',
    });
    const { vertical, horizontal } = snackbar;
    const allContacts = useRecoilValue(getAllContacts);
    const setGetContacts = useSetRecoilState(getContact);

    const onChangeFirstName = (e: React.FormEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            first_name: e.currentTarget.value.replace(/[^\w\s]/gi, "")
        });

    };

    const onChangeLastName = (e: React.FormEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            last_name: e.currentTarget.value.replace(/[^\w\s]/gi, "")
        });
    };

    const onAddNewPhones = () => {
        let phones = [...user.phones];
        phones.push({ number: '' });
        setUser({
            ...user,
            phones
        });
    };

    const onChangePhones = (value: string, index: number) => {
        let updatePhoneNumber = [...user.phones];
        updatePhoneNumber[index] = { number: value };
        setUser({
            ...user,
            phones: updatePhoneNumber
        })
    };

    const onSaveData = () => {
        const findIdx = allContacts.findIndex((e: Contacts) => {
            return e.id === user.id
        });
        let newUpdateUser: Contacts[] = [...allContacts];
        const checkUserExist = newUpdateUser.find((e: Contacts) => {
            return e.first_name === user.first_name || e.last_name === user.last_name
        });
        if (!checkUserExist) {
            newUpdateUser[findIdx] = user;
            setGetContacts(newUpdateUser);
            setSnackbar({ ...snackbar, open: true });
            setTimeout(() => {
                navigate('/contact', { replace: true });
            }, 1500);
        } else {
            setIsError(true);
            setSnackbar({ ...snackbar, open: true });
        }
        
    };


    useEffect(() => {
        let findContact = allContacts.find((e: Contacts) => (e.id).toString() === query.get('id'))
        
        setUser({
            ...user,
            created_at: findContact.created_at,
            first_name: findContact.first_name,
            id: findContact.id,
            last_name: findContact.last_name,
            phones: findContact.phones.length > 0 ? findContact.phones: [{ number: '' }],
            isFavorite: findContact.isFavorite,
            
        });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allContacts, query]);

    return (
        <div data-testid="edit-contact" css={EditContactPageWrapper}>
            <div css={EditContactPageContent}>
                <ContactForm 
                    isForm={true} 
                    isEdit={true} 
                    user={user} 
                    onChangeFirstName={onChangeFirstName} 
                    onChangeLastName={onChangeLastName} 
                    onAddNewPhones={onAddNewPhones} 
                    onChangePhones={onChangePhones} 
                    onSaveData={onSaveData} />
            </div>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={1000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
            >
                {isError ? (
                    <Alert variant="filled" severity="error">
                        Contact name must be unique
                    </Alert>
                ) : (
                    <Alert variant="filled" severity="success">
                            You've successfully updated your contacts!
                    </Alert>
                )}
            </Snackbar>
        </div>
    )
};

export default EditContactPage;