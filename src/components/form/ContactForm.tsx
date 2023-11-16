/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { ContactFormProps } from 'src/types';
import { BsPersonCircle } from 'react-icons/bs';
import { MdAdd } from 'react-icons/md';
import { IoArrowBackOutline } from 'react-icons/io5';
import { ContactFormStyles } from 'src/assets/css';
import { PhoneNumber } from 'src/types';
import { Link } from 'react-router-dom';

const ContactForm = ({ isForm, isEdit, user, onChangeFirstName, onChangeLastName, onAddNewPhones, onChangePhones, onSaveData }: ContactFormProps) => {
    const {
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
        ButtonSaveContact,
        IconAddPhones,
     } = ContactFormStyles();

    const isDisabledButtonSaved = () => {
        if (user.first_name && user.last_name && user.phones[0].number !== '') {
            return false;
        }
        return true;
    }

    
    return (
        <div data-testid="contact-form" css={ContactFormWrapper}>
            <div css={ContactFormTitleWrapper}>
                <Link css={ContactFormBackPage} to={`/contact`}>
                    <IoArrowBackOutline css={ContactFormBackIcon} />
                </Link>
                <h1 css={ContactFormTitle}>{isForm ? isEdit ? 'Edit Contact' : 'Add Contact' : 'Contact Detail'}</h1>
            </div>
            <div css={ImageProfileWrapper}>
                <div css={ImageProfileBox}>
                    <BsPersonCircle css={ImageProfile} />
                </div>
            </div>
            <div css={FormWrapper}>
                <div css={FormInputWrapper}>
                    <label css={LabelFormInput}>First Name</label>
                    <input css={FormInput} readOnly={!isForm} type="text" value={user?.first_name} onChange={onChangeFirstName} placeholder="Enter your first name..." />
                </div>
                <div css={FormInputWrapper}>
                    <label css={LabelFormInput}>Last Name</label>
                    <input css={FormInput} readOnly={!isForm} type="text" value={user?.last_name} onChange={onChangeLastName} placeholder="Enter your last name.." />
                </div>
                <div css={FormInputWrapper}>
                    <div css={LabelPhoneFormInputWrapper}>
                        <label css={LabelFormInput}>Phone</label>
                        <button css={ButtonAddPhones} onClick={onAddNewPhones}>
                            {
                                isForm && (
                                    <MdAdd css={IconAddPhones} />
                                )
                            }
                        </button>
                    </div>
                    {
                            user?.phones.map((obj: PhoneNumber, index: number) => {
                                return (
                                    <div css={formInputPhones} key={index}>
                                        <input readOnly={!isForm} css={FormInput} type="text" value={!isForm ? obj.number || '-' : obj.number} onChange={(e) => onChangePhones(e.target.value, index)} placeholder="Enter your phone number.." />
                                    </div>
                                )
                            })
                    }
                    
                </div>
            </div>
            <div css={ButtonSaveContactWrapper}>
                {
                    isForm && (
                        <button disabled={isDisabledButtonSaved()} css={ButtonSaveContact} onClick={onSaveData}>Save</button>
                    )
                        
                }
            </div>
        </div>
    )
}

export default ContactForm;