import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

test('renderiza título', () => {
  render(<Home />);
  expect(screen.getByText(/cine-blog/i)).toBeInTheDocument();
});
