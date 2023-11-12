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
import moment from 'moment';


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
    const [isError, setIsError] = useState<boolean>(false);
    const [snackbar, setSnackbar] = useState<SnackbarState>({
        open: false,
        vertical: 'top',
        horizontal: 'right',
    });
    const { vertical, horizontal } = snackbar;

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
        setUser({
            ...user,
            created_at: moment().format()
        });
        let newUpdateUser: Contacts[] = [...allContacts];
        const checkUserExist = newUpdateUser.find((e: Contacts) => {
            return e.first_name === user.first_name || e.last_name === user.last_name
        });
        
        if (!checkUserExist) {
            newUpdateUser.push(user)
            setGetContacts(newUpdateUser);
            setSnackbar({...snackbar, open: true});
            setTimeout(() => {
                navigate('/contact', { replace: true });
            }, 1500);
        } else {
            setIsError(true);
            setSnackbar({ ...snackbar, open: true });
        }
        
    };

    return (
        <div data-testid="add-contact" css={AddContactPageWrapper}>
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
                autoHideDuration={2000} 
                onClose={() => setSnackbar({...snackbar, open: false})}
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
            >
                {isError ? (
                    <Alert variant="filled" severity="error">
                        Contact name must be unique
                    </Alert>
                ): (
                    <Alert variant="filled" severity="success">
                        You've successfully added a contact!
                    </Alert>
                )}
            </Snackbar>
        </div>
    )
};

export default AddContactPage;