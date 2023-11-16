/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import { getAllContacts } from 'src/storage';
import { useRecoilValue } from 'recoil';
import { ContactForm } from "src/components";
import { Contacts } from 'src/types';
import { ContactDetailPageStyles } from 'src/assets/css';


const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}


const ContactDetailPage = () => {
    const { ContactDetailPageWrapper, ContactDetailPageContent } = ContactDetailPageStyles();
    const query = useQuery();
    const allContacts = useRecoilValue<Contacts[]>(getAllContacts);
    const [user, setUser] = useState<Contacts>({
        created_at: '',
        first_name: '',
        id: 0,
        last_name: '',
        phones: [],
        isFavorite: false,
    });

    useEffect(() => {
        let findContact = allContacts.find((e: Contacts) => (e.id).toString() === query.get('id'))

        setUser({
            ...user,
            created_at: findContact.created_at,
            first_name: findContact.first_name,
            id: findContact.id,
            last_name: findContact.last_name,
            phones: findContact.phones.length > 0 ? findContact.phones : [{ number: '' }],
            isFavorite: findContact.isFavorite,

        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allContacts, query]);

    return (
        <div data-testid="contact-detail" css={ContactDetailPageWrapper}>
            <div css={ContactDetailPageContent}>
                <ContactForm isForm={false} isEdit={false} user={user} />
            </div>
        </div>
    )
};

export default ContactDetailPage;