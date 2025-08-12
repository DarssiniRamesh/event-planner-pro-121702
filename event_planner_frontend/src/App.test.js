import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Eventify brand in header', () => {
  render(<App />);
  const brand = screen.getByText(/Eventify/i);
  expect(brand).toBeInTheDocument();
});
