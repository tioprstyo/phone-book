// @ts-nocheck
import { render, screen } from '@testing-library/react';
import AddContactPage from '.';

describe('AddContactPage Component Test', () => {
    it('Renders correctly initial document', async () => {
        render(
            <AddContactPage />
        );
        expect(screen.getByTestId('add-contact')).toBeInTheDocument();
    });

});