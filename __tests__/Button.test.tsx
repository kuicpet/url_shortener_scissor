import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Button } from '../components';

/**
 * @jest-environment jsdom
 */

afterEach(() => {
  cleanup();
});

describe('Button component', () => {
  render(<Button text="Click me" />);
  const button = screen.getByRole('button');

  // test 1
  test('Button Rendering', () => {
    expect(button).toBeInTheDocument();
  });

  // test 2
  test('Button Text', () => {
    expect(button).toHaveTextContent('Click me');
  });
});
