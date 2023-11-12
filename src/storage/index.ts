import { atom, selector, } from 'recoil';
import { Contacts } from 'src/types';

const getTemporaryAllContact = atom({
    key: 'getTemporaryAllContact',
    default: []
});


const queryFilterContact = atom({
    key: 'queryFilterContact',
    default: ''
});

const favContacts = atom({
    key: 'favContacts',
    default: [],
});

const limit = atom({
    key: 'limit',
    default: 10
});

const offset = atom({
    key: 'offset',
    default: 1
});

const getAllContacts = selector({
    key: 'getAllContacts',
    get: () => {
        return sessionStorage.getItem('contacts') ? JSON.parse(sessionStorage.getItem('contacts')) : [];
    }
})

const getContact = selector({
    key: 'getContact',
    get: ({ get }) => {
        const contactData =() => {
            if (get(getTemporaryAllContact)) {
                return get(getTemporaryAllContact);
            }
            return sessionStorage.getItem('contacts') ? JSON.parse(sessionStorage.getItem('contacts')) : [];
        };

        let returnData: Contacts[] = [];

        if (get(queryFilterContact)) {
            let allData = contactData();
            returnData = allData.filter((e: Contacts) => {
                return e.first_name.toLowerCase().includes(get(queryFilterContact)) || e.last_name.toLowerCase().includes(get(queryFilterContact))
            })
        } else {
            returnData = contactData();
        }

        return returnData.filter((e: Contacts) => !e.isFavorite).slice((get(offset) - 1) * get(limit), get(offset) * get(limit));

    },
    set: ({ set }, contact: Contacts[]) => {
        const favoriteContacts = contact.filter((e: Contacts) => e.isFavorite);
        sessionStorage.setItem('contacts', JSON.stringify(contact));
        sessionStorage.setItem('favoriteContacts', JSON.stringify(favoriteContacts));
        set(getTemporaryAllContact, contact);
        set(favContacts, favoriteContacts);
    }
});

export {
    getTemporaryAllContact,
    getAllContacts,
    getContact,
    favContacts,
    queryFilterContact,
    limit,
    offset,
};