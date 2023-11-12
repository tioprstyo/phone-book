// @ts-nocheck
import { render, screen } from '@testing-library/react';
import ContactDetailPage from '.';

describe('ContactDetail Component Test', () => {
    it('Renders correctly initial document', async () => {
        render(
            <ContactDetailPage />
        );

        expect(screen.getByTestId('contact-detail')).toBeInTheDocument();
    });

});