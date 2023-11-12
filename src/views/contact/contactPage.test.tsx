// @ts-nocheck
import { render, screen } from '@testing-library/react';
import ContactPage from '.';

describe('ContactPage Component Test', () => {
    it('Renders correctly initial document', async () => {
        render(
            <ContactPage />
        );
        expect(screen.getByTestId('contact-page')).toBeInTheDocument();
    });

});