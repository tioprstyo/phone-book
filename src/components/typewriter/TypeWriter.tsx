/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { TypeWriterStyle } from 'src/assets/css';

const TypeWriter = ({ text, delay }) => {
    const { TypeWriterTitle, ButtonOpenMyContact } = TypeWriterStyle();
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return (
        <div data-testid="type-writer" css={TypeWriterTitle}>
            <div>
                <span>{currentText}</span>
            </div>
                <Link to="contact">
                    <button css={ButtonOpenMyContact}>Open Phone Book</button>
                </Link>
        </div>
    );
};

export default TypeWriter;