// @ts-nocheck
import { render, screen } from '@testing-library/react';
import TypeWriter from './TypeWriter';

describe('TypeWriter Component Test', () => {
    it('Renders correctly initial document', async () => {
        render(
            <TypeWriter />
        );
        expect(screen.getByTestId('type-writer')).toBeInTheDocument();
    });

});