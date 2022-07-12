import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestsGlobalWrapper from '../../containers/TestsGlobalWrapper/TestsGlobalWrapper';
import ThemeModeSwitcher from './ThemeModeSwitcher';

describe('ThemeModeSwitcher', () => {

    it('Button with text `Light` renders on dark mode (default)', () => {
        render(<TestsGlobalWrapper><ThemeModeSwitcher /></TestsGlobalWrapper>);
        expect(screen.getByText('Light')).toBeInTheDocument();
    });

    it('Button with icon `LightModeIcon` renders on dark mode (default)', () => {
        render(<TestsGlobalWrapper><ThemeModeSwitcher /></TestsGlobalWrapper>);
        expect(screen.getByTestId('LightModeIcon')).toBeInTheDocument();
      //  screen.debug();
    });
    
    it('Button with text `Dark` renders on light mode', () => {
        render(<TestsGlobalWrapper><ThemeModeSwitcher /></TestsGlobalWrapper>);
        userEvent.click(screen.getByText('Light'));
        expect(screen.getByText('Dark')).toBeInTheDocument();
    });
    
    it('Button with icon `DarkModeIcon` renders on light mode', () => {
        render(<TestsGlobalWrapper><ThemeModeSwitcher /></TestsGlobalWrapper>);
        userEvent.click(screen.getByText('Light'));
        expect(screen.getByTestId('DarkModeIcon')).toBeInTheDocument();
    });

});