import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

test('renders button with text', () => {
  const { getByText } = render(<Button text="Click me" />);
  const buttonElement = getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick function when clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button text="Click me" onClick={handleClick} />
  );
  const buttonElement = getByText('Click me');
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renders loading state', () => {
  const { getByText } = render(<Button text="Submit" loading />);
  const loadingElement = getByText('Loading...');
  expect(loadingElement).toBeInTheDocument();
});

test('renders button with icon', () => {
  const { getByTestId } = render(
    <Button text="Click me" icon={<span data-testid="icon" />} />
  );
  const iconElement = getByTestId('icon');
  expect(iconElement).toBeInTheDocument();
});

test('renders button as disabled', () => {
  const { getByText } = render(<Button text="Click me" disabled />);
  const buttonElement = getByText('Click me');
  expect(buttonElement).toBeDisabled();
});
