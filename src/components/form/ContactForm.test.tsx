// @ts-nocheck
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm Component Test', () => {
    it('Renders correctly initial document', async () => {
        render(
            <ContactForm />
        );
        expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    });

});