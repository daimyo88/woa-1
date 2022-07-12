import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import CtaLink from './CtaLink';
import SearchIcon from '@mui/icons-material/Search';

describe('CtaLink', () => {
  test('renders link text', () => {
    render(<BrowserRouter><CtaLink url="/contact" text="Contact" /></BrowserRouter>);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test('link has correct href', () => {
    render(<BrowserRouter><CtaLink url="/contact" text="Contact" /></BrowserRouter>);
    expect(screen.getByText("Contact")).toHaveAttribute("href", "/contact");
  });

  test('link icon renders properly it is passed', () => {
    render(<BrowserRouter><CtaLink url="/contact" text="Contact" icon={<SearchIcon />} /></BrowserRouter>);
    expect(screen.getByTestId('SearchIcon')).toBeInTheDocument();
  });

  test('link icon doesn`t render if not passed', () => {
    render(<BrowserRouter><CtaLink url="/contact" text="Contact" /></BrowserRouter>);
    expect(screen.getByText("Contact")).not.toContainHTML('svg');
  });

});
