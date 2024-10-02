import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Options from '../Options';

describe('Options Page', () => {
  test('renders options page with default settings', () => {
    render(<Options />);
    expect(screen.getByText('Extension Options')).toBeInTheDocument();
    expect(screen.getByLabelText('Enable Notifications')).toBeInTheDocument();
    expect(screen.getByLabelText('Theme:')).toBeInTheDocument();
  });

  test('enables and disables notifications', () => {
    render(<Options />);
    const checkbox = screen.getByLabelText('Enable Notifications');
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  test('changes the theme', () => {
    render(<Options />);
    const select = screen.getByLabelText('Theme:');
    fireEvent.change(select, { target: { value: 'dark' } });
    expect(select.value).toBe('dark');
  });
});
