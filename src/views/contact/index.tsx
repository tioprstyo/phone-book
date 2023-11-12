/** @jsxImportSource @emotion/react */
import { useEffect, useState  } from 'react';
import { Link } from "react-router-dom";
import { Card } from 'src/components';
import { Modal, Button } from '@mui/material';
import { MdAdd } from 'react-icons/md';
import { getContact, queryFilterContact, favContacts, offset, getTemporaryAllContact, limit } from 'src/storage';
import { Contacts } from 'src/types';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useQuery } from '@apollo/client';
import { GET_CONTACT } from 'src/query';
import { Pagination, PaginationItem, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ContactPageStyles } from 'src/assets/css';


const ContactPage = () => {
    const { data } = useQuery(GET_CONTACT);
    const {
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
    } = ContactPageStyles();
    const [getContacts, setGetContacts] = useRecoilState<Contacts[]>(getContact);
    const [offsets, setOffsets] = useRecoilState<number>(offset);
    const [filter, setFilter] = useRecoilState<string>(queryFilterContact);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    const [selectedDeleteId, setSelectedDeleteId] = useState<number>(0);
    const favoriteContact = useRecoilValue(favContacts);
    const allTemporaryContact = useRecoilValue<Contacts[]>(getTemporaryAllContact);
    const limits = useRecoilValue(limit);

    useEffect(() => {
        setIsLoading(true);
        let newData = [];
        if(!allTemporaryContact || allTemporaryContact.length === 0) {
            if(data) {
                newData = data.contact.map((e: Contacts) => ({ ...e, isFavorite: false }));
            }
        } else {
            newData = allTemporaryContact;
        }
        
        setGetContacts(newData as Contacts[]);
        setIsLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setGetContacts, data]);

    const onChangeFavorite = (id: number) => {
        const findId = allTemporaryContact.findIndex((e: Contacts) => {
            return e.id === id
        });
        
        let newResetValue = {
            ...allTemporaryContact[findId],
            isFavorite: !allTemporaryContact[findId].isFavorite
        }

        let newArrayValue = [...allTemporaryContact]
        newArrayValue[findId] = newResetValue;
        setGetContacts(newArrayValue);
    };

    const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value);
    };

    const onChangePage = (e: React.ChangeEvent<unknown>, page: number) => {
        setOffsets(page);
    };

    const onOpenModalDelete = (id: number) => {
        setSelectedDeleteId(id);
        setOpenModalDelete(true);
    };

    const onCloseModalDelete = () => {
        setOpenModalDelete(false);
        setSelectedDeleteId(0);
    };

    const onDeleteContact = () => {
        const findId = allTemporaryContact.findIndex((e: Contacts) => {
            return e.id === selectedDeleteId
        });

        let newDataAfterDelete = [...allTemporaryContact];
        newDataAfterDelete.splice(findId, 1);
        setGetContacts(newDataAfterDelete);
        setSelectedDeleteId(0);
        setOpenModalDelete(false);
    }
    
    return (
        <div data-testid="contact-page" css={ContactPageWrapper}>
            <div css={ContentWrapper}>
                <div css={SearchWrapper}>
                    <h1 css={ContactPageTitle}>Contacts</h1>
                    <Link to={"/contact/add"}>
                        <button css={ButtonAddContactMobile}><MdAdd css={IconButtonAddContact} /></button>
                    </Link>
                </div>
                <div css={SearchWrapper}>
                    <input css={SearchBox} type="text" placeholder="Search Contact..." onKeyUp={onChangeSearch} />
                    <Link to={"/contact/add"}>
                        <button css={ButtonAddContact}><MdAdd css={IconButtonAddContact} />Add Contact</button>
                    </Link>
                </div>
                <div css={ContactListWrapper}>
                    {
                        isLoading ?  (
                            <div css={LoadingWrapper}>
                                <img css={LoadingImage} src={require('src/assets/img/loading.gif')} alt={'loading'} /> 
                            </div>
                        ): (
                            <>
                                {
                                    favoriteContact && Array.isArray(favoriteContact) && favoriteContact.length > 0 && (
                                        <div css={FavoriteSections}>
                                            <div css={TitleFavoriteSections}>Favorite</div>
                                            {
                                                favoriteContact.map((item: Contacts, index: number) => (
                                                    <Card contact={item} onChangeFavorite={onChangeFavorite} onChangeModalIsOpen={onOpenModalDelete} key={index} />
                                                ))
                                            }
                                        </div>
                                        
                                    )
                                }
                                {
                                    getContacts && Array.isArray(getContacts) && getContacts.length > 0 ? getContacts.map((item: Contacts, index: number) => (
                                        <Card contact={item} onChangeFavorite={onChangeFavorite} onChangeModalIsOpen={onOpenModalDelete} key={index} />
                                    )) : <></>
                                }
                            </>
                        )
                    }
                </div>
                <div css={PaginationWrapper}>
                    <Stack spacing={2}>
                        <Pagination
                            count={Math.ceil((filter ? getContacts.length : allTemporaryContact.length) / limits)}
                            page={offsets}
                            siblingCount={0}
                            boundaryCount={1}
                            onChange={onChangePage}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                    {...item}
                                />
                            )}
                        />
                    </Stack>
                    </div>
            </div>
            <Modal
                open={openModalDelete}
                onClose={onCloseModalDelete}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <div css={ModalWrapper}>
                    <h2 id="child-modal-title">Are you sure?</h2>
                    <p id="child-modal-description">
                        Do you really want to delete these contact?
                    </p>
                    <div css={ButtonDeleteWrapper}>
                        <Button css={ButtonDeleteApprove} onClick={onDeleteContact}>Yes</Button>
                        <Button css={ButtonDeleteCancel} onClick={onCloseModalDelete}>Cancel</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ContactPage;
