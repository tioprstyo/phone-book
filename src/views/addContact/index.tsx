/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getContact, getAllContacts } from 'src/storage';
import { ContactForm } from "src/components";
import { Snackbar, Alert} from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Contacts, SnackbarState } from 'src/types';
import { AddContactPageStyles } from 'src/assets/css';
import * as moment from 'moment';


const AddContactPage = () => {
    const { AddContactPageWrapper, AddContactPageContent } = AddContactPageStyles();
    const navigate = useNavigate();
    const allContacts = useRecoilValue<Contacts[]>(getAllContacts);
    const setGetContacts = useSetRecoilState<Contacts[]>(getContact);
    const [user, setUser] = useState<Contacts>({
        created_at: '',
        first_name: '',
        id: 0,
        last_name: '',
        phones: [{number: ''}],
        isFavorite: false,
    });
    const [snackbar, setSnackbar] = useState<SnackbarState>({
        open: false,
        vertical: 'top',
        horizontal: 'right',
    });
    const { vertical, horizontal } = snackbar;

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
        setUser({
            ...user,
            created_at: moment().format()
        });
        let newUpdateUser: Contacts[] = [...allContacts]
        newUpdateUser.push(user)
        setGetContacts(newUpdateUser);
        setSnackbar({...snackbar, open: true});
        setTimeout(() => {
            navigate('/contact', { replace: true });
        }, 1500);
        
    };

    return (
        <div css={AddContactPageWrapper}>
            <div css={AddContactPageContent}>
                <ContactForm
                    isForm={true}
                    isEdit={false}
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
                onClose={() => setSnackbar({...snackbar, open: false})}
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
            >
                <Alert variant="filled" severity="success">
                    You've successfully added a contact!
                </Alert>
            </Snackbar>
        </div>
    )
};

export default AddContactPage;