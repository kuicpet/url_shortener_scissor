import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Hero } from '../components';

/**
 * @jest-environment jsdom
 */

afterEach(() => {
  cleanup();
});

describe('Hero Component', () => {
  test('renders hero title', () => {
    render(
      <Hero
        title="Shorten URLs."
        title2="Generate QR Codes."
        title3="Custom Links."
        title4="Share."
      />
    );
    const titleElement = screen.getByText(/Shorten URLs./i);
    expect(titleElement).toBeInTheDocument();
  });
});
