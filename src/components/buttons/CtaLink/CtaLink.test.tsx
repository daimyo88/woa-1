import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import CtaLink from './CtaLink';

describe('CtaLink', () => {
  test('renders link text', () => {
    render(<BrowserRouter><CtaLink url="/contact" text="Contact" icon={null}/></BrowserRouter>);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test('link has correct href', () => {
    render(<BrowserRouter><CtaLink url="/contact" text="Contact" icon={null}/></BrowserRouter>);
    expect(screen.getByText("Contact")).toHaveAttribute("href", "/contact");
  //  screen.debug();
  });

});
