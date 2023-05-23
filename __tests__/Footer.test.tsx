import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Footer } from '../components';

/**
 * @jest-environment jsdom
 */

afterEach(() => {
  cleanup();
});

describe('Footer Component', () => {
  render(<Footer />);
  const footer = screen.getByTestId('footer');
  test('Footer Rendering', () => {
    expect(footer).toBeInTheDocument();
  });
});
