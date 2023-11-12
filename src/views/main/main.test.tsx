// @ts-nocheck
import { render, screen } from '@testing-library/react';
import Main from '.';

describe('Main Component Test', () => {
    it('Renders correctly initial document', async () => {
        render(
            <Main />
        );
        const MainLabel = screen.getByTestId('main');

        expect(MainLabel).toBeInTheDocument();
    });

});