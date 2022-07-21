import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Power from './Power';

it('button_text_check(default)', () => {
  render(<Power name="電源" />);
  const nameElement = screen.getByText(/電源 off/i);
  expect(nameElement).toBeInTheDocument();
});

it('button_off_disable_check(default)', () => {
  render(<Power name="電源" />);
  const offButtonElement = screen.getByRole('button', { name: 'OFF' });
  expect(offButtonElement).toBeDisabled();
});


it('button_off_enable_check(default)', () => {
  render(<Power name="電源" />);
  const onButtonElement = screen.getByRole('button', { name: 'ON' });
  expect(onButtonElement).not.toBeDisabled();
});

it('change from off to on', () => {
  render(<Power name="電源" />);
  const onButtonElement = screen.getByRole('button', { name: 'ON' });
  userEvent.click(onButtonElement);
  expect(onButtonElement).toBeDisabled();
});
