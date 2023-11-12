import { Contacts } from "..";

export interface CardProps {
    contact: Contacts,
    onChangeFavorite: (id: number) => void
    onChangeModalIsOpen: (id: number) => void
}