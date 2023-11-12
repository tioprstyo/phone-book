/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { CardProps } from 'src/types';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { CardComponentStyles } from 'src/assets/css';

const Card = ({ contact, onChangeFavorite, onChangeModalIsOpen }: CardProps) => {
    const {
        CardComponentWrapper,
        CardComponentContentWrapper,
        CardComponentItemWrapper,
        CardComponentItem,
        CardComponentButtonWrapper,
        ButtonDeleteCard,
        ButtonFavoriteCard,
        ButtonEditCard,
        IconButtonActionsFav,
        IconButtonActions,
        TextButtonActions,
        IconPhoneCard,
        CardNameText,
        CardNameWrapper,
        CardPhoneText
    } = CardComponentStyles();
    
    return (
        <div data-testid="card" css={CardComponentWrapper}>
            <div css={CardComponentContentWrapper}>
                <div css={CardComponentItemWrapper}>
                    <div css={CardComponentItem}>
                        <Link css={CardNameWrapper} to={`/contact/detail?first-name=${contact.first_name}&id=${contact.id}`}>
                            <p css={CardNameText}>{contact.first_name} {contact.last_name}</p>
                        </Link>
                        <p css={CardPhoneText}><BsTelephoneFill css={IconPhoneCard} />{contact.phones[0].number}</p>
                    </div>
                    <div css={[CardComponentItem, CardComponentButtonWrapper]}>
                        <Link to={`/contact/edit?firstName=${contact.first_name}&id=${contact.id}`}>
                            <button css={ButtonEditCard}><FiEdit css={IconButtonActions} /><span css={TextButtonActions}>Edit</span></button>
                        </Link>
                        <button css={ButtonDeleteCard} onClick={() => onChangeModalIsOpen(contact.id)}><RiDeleteBin6Line css={IconButtonActions} /><span css={TextButtonActions}>Delete</span></button>
                        <button css={ButtonFavoriteCard} onClick={() => onChangeFavorite(contact.id)}> {
                            contact.isFavorite ? (
                                <AiFillStar css={IconButtonActionsFav} />
                            ): (
                                    <AiOutlineStar css={IconButtonActionsFav} />
                            )
                        }</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;