// Album.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Album from './Album';

test('renders album title', () => {
  render(<Album title="Summer Vacation" />);
  const titleElement = screen.getByText(/Summer Vacation/i);
  expect(titleElement).toBeInTheDocument();
});