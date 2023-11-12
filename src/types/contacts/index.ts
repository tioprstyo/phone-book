import { PhoneNumber } from "../phoneNumber";

export interface Contacts {
    created_at: string;
    first_name: string;
    id: number;
    last_name: string;
    phones: PhoneNumber[];
    isFavorite: boolean;
};

export interface ContactFormProps {
    isForm: boolean,
    isEdit: boolean,
    user?: Contacts, 
    onChangeFirstName?: (e: React.FormEvent<HTMLInputElement>) => void, 
    onChangeLastName?: (e: React.FormEvent<HTMLInputElement>) => void, 
    onAddNewPhones?: () => void, 
    onChangePhones?: (number: string, index: number) => void, 
    onSaveData?: () => void
};