import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

describe('Home', () => {
    it('renders without crashing', () => {
        render(<Home />);
        expect(screen.getByText('Get started by editing')).toBeTruthy();
    });

    it('contains the Next.js logo', () => {
        render(<Home />);
        expect(screen.getByAltText('Next.js Logo')).toBeInTheDocument();
    });

    it('contains the code element with correct text', () => {
        render(<Home />);
        expect(screen.getByText('app/page.tsx')).toBeInTheDocument();
    });

    // 新たなテストケース
    it('contains the header with correct text', () => {
        render(<Home />);
        expect(screen.getByRole('heading', { name: /Quickstart/i })).toBeInTheDocument();
    });

    it('contains the link to Next.js documentation', () => {
        render(<Home />);
        expect(screen.getByRole('link', { name: /Docs/i })).toBeInTheDocument();
    });
    it('has the correct URL for the Next.js documentation link', () => {
        render(<Home />);
        const link = screen.getByRole('link', { name: /Docs/i });
        expect(link).toHaveAttribute('href', 'https://docs.amplify.aws/gen2/');
    });      
});