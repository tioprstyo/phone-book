/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { TypeWriterStyle } from 'src/assets/css';

const TypeWriter = ({ text, delay }) => {
    const { TypeWriterTitle, ButtonOpenMyContact } = TypeWriterStyle();
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isButtonShow, setIsButtonShow] = useState(false);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        } else {
            setIsButtonShow(true);
        }
    }, [currentIndex, delay, text]);

    return (
        <div css={TypeWriterTitle}>
            <div>
                <span>{currentText}</span>
            </div>
            {isButtonShow && (
                <Link to="contact">
                    <button css={ButtonOpenMyContact}>Open My Contact</button>
                </Link>
            )}
        </div>
    );
};

export default TypeWriter;