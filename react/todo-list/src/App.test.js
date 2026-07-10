import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar links', () => {
  render(<App />);
  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
  expect(screen.getByText(/contact/i)).toBeInTheDocument();
});
