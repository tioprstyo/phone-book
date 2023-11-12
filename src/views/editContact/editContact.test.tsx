// @ts-nocheck
import { render, screen } from '@testing-library/react';
import EditContactPage from '.';

describe('EditContactPage Component Test', () => {
    it('Renders correctly initial document', async () => {
        render(
            <EditContactPage />
        );
        expect(screen.getByTestId('edit-contact')).toBeInTheDocument();
    });

});