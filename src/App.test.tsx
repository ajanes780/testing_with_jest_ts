import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  // expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  expect(colorButton).toBeInTheDocument();
  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});
