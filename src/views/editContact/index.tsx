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
            first_name: e.currentTarget.value
        });

    };

    const onChangeLastName = (e: React.FormEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            last_name: e.currentTarget.value
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
        let newUpdateUser: Contacts[] = [...allContacts]
        newUpdateUser[findIdx] = user;
        setGetContacts(newUpdateUser);
        setSnackbar({ ...snackbar, open: true });
        setTimeout(() => {
            navigate('/contact', { replace: true });
        }, 1500);
    };


    useEffect(() => {
        setUser(
            allContacts.find((e: Contacts) => (e.id).toString() === query.get('id'))
        );
    }, [allContacts, query]);

    return (
        <div css={EditContactPageWrapper}>
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
                <Alert variant="filled" severity="success">
                    You've successfully updated your contacts!
                </Alert>
            </Snackbar>
        </div>
    )
};

export default EditContactPage;