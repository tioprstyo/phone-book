// @ts-nocheck
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component Test', () => {
    it('Renders correctly initial document', async () => {
        render(
            <Card />
        );
        expect(screen.getByTestId('card')).toBeInTheDocument();
    });

});