import React from 'react';
import { render, screen } from '@testing-library/react';
import TestsGlobalWrapper from '../../containers/TestsGlobalWrapper/TestsGlobalWrapper';
import PageHeader from './PageHeader';

describe('PageHeader', () => {

    it('PageHeader contains logo', () => {
        render(<TestsGlobalWrapper><PageHeader /></TestsGlobalWrapper>);
        expect(screen.getByText('WoA')).toBeInTheDocument();
    });

    it('PageHeader contains navigation', () => {
        const { container } = render(<TestsGlobalWrapper><PageHeader /></TestsGlobalWrapper>);
        const navigation = container.querySelector('#desktop-navigation');
        expect(navigation).toBeInTheDocument();
    });

    it('PageHeader contains mobile navigation', () => {
        const { container } = render(<TestsGlobalWrapper><PageHeader /></TestsGlobalWrapper>);
        const navigation = container.querySelector('#mobile-navigation');
        expect(navigation).toBeInTheDocument();
    });

    it('PageHeader contains theme switcher', () => {
        const { container } = render(<TestsGlobalWrapper><PageHeader /></TestsGlobalWrapper>);
        const themeSwitcher = container.querySelector('#theme-switcher');
        expect(themeSwitcher).toBeInTheDocument();
    });

});